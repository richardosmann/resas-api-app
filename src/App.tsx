import { Provider } from 'react-redux';
import { store } from './redux/store';
import CustomPrefectureCard from './components/CustomPrefectureCard';
import CustomChart from './components/CustomChart';
import React from 'react';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CustomPrefectureCard />
      <CustomChart />
    </Provider>
  );
};

export default App;
