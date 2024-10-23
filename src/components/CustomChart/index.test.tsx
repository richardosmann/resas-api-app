import CustomChart from './index';
import { Provider } from 'react-redux';
import { mockData } from '../../lib/mock';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';

const mockStore = configureStore([]);

test('renders customchart', () => {
  const store = mockStore(mockData);

  render(
    <Provider store={store}>
      <CustomChart />;
    </Provider>
  );

  const chartSVG = screen.getByRole('img', { hidden: true });
  expect(chartSVG).toBeInTheDocument();
});
