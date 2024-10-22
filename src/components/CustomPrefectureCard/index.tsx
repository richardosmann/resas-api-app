import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import useResas from '../../hook/useResas';
import { Prefecture } from '../../lib/types';
import { RootState } from '../../redux/store';
import CustomCheckBox from '../CustomCheckBox';
import './styles.css';

const CustomPrefectureCard: React.FC = () => {
  const { prefectures }: { prefectures: Prefecture[] } = useSelector(
    (state: RootState) => state.resas
  );

  const { useLoadInitialPrefectures } = useResas();

  useEffect(() => {
    useLoadInitialPrefectures();
  }, [useLoadInitialPrefectures]);

  const showCard = useMemo(() => {
    return (
      <div className="card">
        {prefectures.map((prefecture: Prefecture, index: number) => (
          <CustomCheckBox key={index} name={prefecture.prefName} />
        ))}
      </div>
    );
  }, [prefectures]);

  return <>{showCard}</>;
};

export default CustomPrefectureCard;
