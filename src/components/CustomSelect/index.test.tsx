import CustomSelect from './index';
import { Provider } from 'react-redux';
import { mockData } from '../../lib/mock';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';

const mockStore = configureStore([]);

test('renders customselect', () => {
  const store = mockStore(mockData);
  render(
    <Provider store={store}>
      <CustomSelect />;
    </Provider>
  );

  const selectElement = screen.getByRole('combobox');
  expect(selectElement).toBeInTheDocument();

  const options = screen.getAllByRole('option');
  expect(options).toHaveLength(4);

  expect(options[0]).toHaveTextContent('総人口');
  expect(options[1]).toHaveTextContent('年少人口');
  expect(options[2]).toHaveTextContent('生産年齢人口');
  expect(options[3]).toHaveTextContent('老年人口');
});
