import { screen, render } from '@testing-library/react';
import PrefectureCard from './index';
import { Provider } from 'react-redux';
import { mockData } from '../../lib/mock';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

test('renders customprefecturecard', () => {
  const store = mockStore(mockData);
  render(
    <Provider store={store}>
      <PrefectureCard />;
    </Provider>
  );

  const checkbox0 = screen.getByText(mockData.resas.prefectures[0].prefName);
  expect(checkbox0).toBeInTheDocument();

  const checkbox1 = screen.getByText(mockData.resas.prefectures[1].prefName);
  expect(checkbox1).toBeInTheDocument();

  const checkbox2 = screen.getByText(mockData.resas.prefectures[2].prefName);
  expect(checkbox2).toBeInTheDocument();
});
