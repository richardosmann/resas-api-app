import React, { useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import useResas from '../../hook/useResas';
import { Prefecture } from '../../lib/types';
import { RootState } from '../../redux/store';
import CustomCheckBox from '../CustomCheckBox';
import Spinner from '../CustomSpinner';
import './styles.css';

const CustomPrefectureCard: React.FC = () => {
  const {
    loading,
    prefectures,
  }: { loading: boolean; prefectures: Prefecture[] } = useSelector(
    (state: RootState) => state.resas
  );

  const {
    useLoadInitialPrefectures,
    useSelectPrefecture,
    useRemovePrefecture,
  } = useResas();

  useEffect(() => {
    useLoadInitialPrefectures();
  }, [useLoadInitialPrefectures]);

  const handleCheck = useCallback(
    async (code: number, checked: boolean) => {
      checked ? await useSelectPrefecture(code) : useRemovePrefecture(code);
    },
    [useSelectPrefecture, useRemovePrefecture]
  );

  const showCard = useMemo(() => {
    console.log(loading);
    return (
      <div className="card">
        {prefectures.map((prefecture: Prefecture, index: number) => (
          <CustomCheckBox
            key={index}
            name={prefecture.prefName}
            code={prefecture.prefCode}
            handleChange={handleCheck}
          />
        ))}
        {loading && <Spinner />}
      </div>
    );
  }, [prefectures, loading]);

  return <>{showCard}</>;
};

export default CustomPrefectureCard;
