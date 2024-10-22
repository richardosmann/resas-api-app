import { Provider } from 'react-redux';
import { store } from './redux/store';
import CustomPrefectureCard from './components/CustomPrefectureCard';

const App = () => {
  return (
    <Provider store={store}>
      <CustomPrefectureCard />
    </Provider>
  );
};

export default App;
