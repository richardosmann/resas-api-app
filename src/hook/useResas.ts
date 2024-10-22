import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { loadInitialPrefecturesApi } from '../api/resas';

const useResas = () => {
  const dispatch = useDispatch();

  const useLoadInitialPrefectures = useCallback(async () => {
    await loadInitialPrefecturesApi(dispatch);
  }, [dispatch]);

  return { useLoadInitialPrefectures };
};

export default useResas;
