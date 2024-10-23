import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CustomPrefectureCard from './components/CustomPrefectureCard';
import CustomChart from './components/CustomChart';
import Spinner from './components/CustomSpinner';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <CustomPrefectureCard />
        <CustomChart />
      </Suspense>
    </Provider>
  );
};

export default App;
