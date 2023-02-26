import { screen, render } from '@testing-library/react';
import App from './App';

it('should renders APP component without crashing', () => {
  render(<App />);
});
