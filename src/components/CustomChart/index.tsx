import React, { useMemo } from 'react';
import Highcharts, { SeriesLineOptions } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './styles.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CustomSelect from '../CustomSelect';
import { Population, Prefecture } from '../../lib/types';
import { ageOptions } from '../../lib/constants';

const CustomChart: React.FC = () => {
  const { prefectures, selectedLists, age } = useSelector(
    (state: RootState) => state.resas
  );

  const options = useMemo(() => {
    const categories = selectedLists[0]?.data[0]?.data?.map((item) =>
      item.year.toString()
    );
    const chartData = selectedLists.map((list: Population) => {
      const prefecture = prefectures.filter(
        (item: Prefecture) => item.prefCode === list.prefCode
      );
      const index = ageOptions.indexOf(age);
      const data: SeriesLineOptions = {
        name: prefecture[0].prefName,
        type: 'line',
        data: list?.data[index]?.data?.map((item) => item.value),
      };
      return data;
    });

    const chartOptions: Highcharts.Options = {
      title: {
        text: '',
      },
      xAxis: {
        title: {
          text: '年',
        },
        categories: categories,
      },
      yAxis: {
        title: {
          text: '人口',
        },
      },
      series: chartData,
      accessibility: {
        enabled: false,
      },
    };

    return chartOptions;
  }, [prefectures, selectedLists, age]);

  const showChart = useMemo(() => {
    return (
      selectedLists.length && (
        <>
          <CustomSelect />
          <div className="chart">
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </>
      )
    );
  }, [options]);

  return <>{showChart}</>;
};

export default CustomChart;
