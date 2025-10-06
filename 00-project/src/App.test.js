import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Connected component
import { Provider } from 'react-redux';
import store from './store/store'; // Adjust path to your actual Redux store
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );

  const linkElements = screen.getAllByText(/Burger Builder/i);
  expect(linkElements.length).toBeGreaterThan(0); 
});