import { Dispatch } from 'redux';
import { getPrefecturesApi, getIndividualApi } from '../lib/constants';
import { Population, Prefecture } from '../lib/types';
import {
  loadInitialPrefectures,
  selectPrefecture,
  removePrefecture,
  filterByAge,
} from '../redux/resas/resas';

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

export const selectPrefectureApi = async (
  prefCode: number,
  dispatch: Dispatch
) => {
  try {
    const res = await fetch(`${getIndividualApi}?prefCode=${prefCode}`, {
      method: 'GET',
      headers: { 'x-api-key': `${process.env.REACT_APP_API_KEY}` },
    });
    const response = await res.json();
    const { data } = response.result;
    const payload: Population = {
      data,
      prefCode,
    };
    dispatch(selectPrefecture(payload));
  } catch (error) {
    alert((error as Error).message);
  }
};

export const removePrefectureApi = (prefCode: number, dispatch: Dispatch) => {
  dispatch(removePrefecture(prefCode));
};

export const filterByAgeApi = (age: string, dispatch: Dispatch) => {
  dispatch(filterByAge(age));
};
