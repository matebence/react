import { configureStore } from '@reduxjs/toolkit';
import burgerBuilder from '../store/reducers/burgerBuilder';
import order from '../store/reducers/order';
import auth from '../store/reducers/auth';

const store = configureStore({
  reducer: {
    burgerBuilder: burgerBuilder,
    order: order,
    auth: auth
  },
},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // Chrome dev tools extension

export default store;