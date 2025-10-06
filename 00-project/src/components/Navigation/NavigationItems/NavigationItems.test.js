import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavigationItems from './NavigationItems';

describe('NavigationItems component', () => {
  describe('when user is NOT authenticated', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <NavigationItems isAuthenticated={false} />
        </BrowserRouter>
      );
    });

    test('renders two navigation items', () => {
      const items = screen.getAllByRole('listitem');
      expect(items).toHaveLength(2);
      expect(screen.getByText('Burger Builder')).toBeInTheDocument();
      expect(screen.getByText('Authenticate')).toBeInTheDocument();
    });
  });

  describe('when user IS authenticated', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <NavigationItems isAuthenticated={true} />
        </BrowserRouter>
      );
    });

    test('renders three navigation items', () => {
      const items = screen.getAllByRole('listitem');
      expect(items).toHaveLength(3);
      expect(screen.getByText('Burger Builder')).toBeInTheDocument();
      expect(screen.getByText('Orders')).toBeInTheDocument();
      expect(screen.getByText('Logout')).toBeInTheDocument();
    });
  });
});