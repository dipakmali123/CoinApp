/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions} from 'react-native';
import {BarChart} from 'react-native-custom-chart-kit';

const screenWidth = Dimensions.get('window').width;

const ChartBlock = () => {
  const chartConfig = {
    backgroundGradientFrom: 'red',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: 'blue',
    backgroundGradientToOpacity: 0.9,
    color: (opacity = 1) => `rgba(250, 280, 300, ${opacity})`,
    strokeWidth: 3,
    barPercentage: 0.6,
    useShadowColorFromDataset: false,
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 70],
      },
    ],
  };

  return (
    <View style={{alignItems: 'center', alignSelf: 'center'}}>
      <BarChart
        data={data}
        style={{alignItems: 'center', alignSelf: 'center'}}
        width={screenWidth * 0.95}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  );
};

export default ChartBlock;
