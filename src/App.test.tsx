import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from './App';
import { ageOptions } from './lib/constants';

const mockStore = configureStore();
const store = mockStore({
  resas: {
    prefectures: [
      {
        prefCode: 1,
        prefName: '北海道',
      },
      {
        prefCode: 2,
        prefName: '青森県',
      },
      {
        prefCode: 3,
        prefName: '岩手県',
      },
    ],
    selectedLists: [],
    age: ageOptions[0],
  },
});

test('renders app', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
