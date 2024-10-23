import CustomCheckBox from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen, fireEvent } from '@testing-library/react';

const mockStore = configureStore([]);

const mockData = {
  name: '青森県',
  code: 2323,
};

const mockChange = () => {
  //
};

test('renders customcheckbox', () => {
  const store = mockStore(mockData);
  render(
    <Provider store={store}>
      <CustomCheckBox
        name={mockData.name}
        code={mockData.code}
        handleChange={mockChange}
      />
    </Provider>
  );

  const checkbox = screen.getByLabelText(mockData.name);
  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});
