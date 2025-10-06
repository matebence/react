import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { BurgerBuilder } from './BurgerBuilder';
import '@testing-library/jest-dom';

describe('<BurgerBuilder />', () => {
  test('renders BuildControls component', () => {

    const props = {
      ings: { salad: 1, bacon: 0, cheese: 1, meat: 1 },
      price: 6.5,
      isAuthenticated: false,
    };

    const { container } = render(
      <BrowserRouter>
        <BurgerBuilder {...props} />
      </BrowserRouter>
    );

    const buildControlsDivs = container.querySelectorAll('.BuildControls');
    expect(buildControlsDivs).toHaveLength(1);
  });
});