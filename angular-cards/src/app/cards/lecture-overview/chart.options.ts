export const chartOptions = (textStyle: string) => {
  return {
    backgroundColor: { fill: 'transparent' },
    titleTextStyle: textStyle,
    vAxis: {
      textStyle: textStyle,
      titleTextStyle: textStyle,
      gridlines: { color: '#787878' },
    },
    hAxis: {
      textStyle: textStyle,
      titleTextStyle: textStyle,
    },
    legend: {
      textStyle: textStyle,
    },
  };
};
