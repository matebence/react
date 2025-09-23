import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/results';
import { Provider } from 'react-redux';

const asyncMiddleware = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);  // If action is a function (like redux-thunk), call it
  }
  console.log("Middleware", action);
  const result = next(action)
  console.log("next state", result);
  return result; // Otherwise, pass it down the chain
};

// configureStore automatically sets up redux-thunk for handling async actions (you don’t need to manually apply it like in the old createStore method).
const store = configureStore({
  reducer: {
    ctr: counterReducer,
    res: resultReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(asyncMiddleware)});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
