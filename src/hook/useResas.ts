import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  loadInitialPrefecturesApi,
  selectPrefectureApi,
  removePrefectureApi,
  filterByAgeApi,
} from '../api/resas';

const useResas = () => {
  const dispatch = useDispatch();

  const useLoadInitialPrefectures = useCallback(async () => {
    await loadInitialPrefecturesApi(dispatch);
  }, [dispatch]);

  const useSelectPrefecture = useCallback(
    async (prefCode: number) => {
      await selectPrefectureApi(prefCode, dispatch);
    },
    [dispatch]
  );

  const useRemovePrefecture = useCallback(
    (prefCode: number) => {
      removePrefectureApi(prefCode, dispatch);
    },
    [dispatch]
  );

  const useFilterByAge = useCallback(
    (age: string) => {
      filterByAgeApi(age, dispatch);
    },
    [dispatch]
  );

  return {
    useLoadInitialPrefectures,
    useSelectPrefecture,
    useRemovePrefecture,
    useFilterByAge,
  };
};

export default useResas;
