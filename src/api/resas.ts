import { Dispatch } from 'redux';
import { getPrefecturesApi } from '../lib/constants';
import { Prefecture } from '../lib/types';
import { loadInitialPrefectures } from '../redux/resas/resas';

export const loadInitialPrefecturesApi = async (dispatch: Dispatch) => {
  try {
    const response = await fetch(getPrefecturesApi, {
      method: 'GET',
      headers: { 'x-api-key': `${process.env.REACT_APP_API_KEY}` },
    });
    if (response) {
      const data = await response.json();
      const payload: Prefecture[] = data.result;
      dispatch(loadInitialPrefectures(payload));
    }
  } catch (error) {
    alert((error as Error).message);
  }
};
