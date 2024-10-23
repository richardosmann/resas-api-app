import { Provider } from 'react-redux';
import { store } from './redux/store';
import CustomPrefectureCard from './components/CustomPrefectureCard';
import CustomSelect from './components/CustomSelect';

const App = () => {
  return (
    <Provider store={store}>
      <CustomPrefectureCard />
      <CustomSelect />
    </Provider>
  );
};

export default App;
