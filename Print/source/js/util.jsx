const spacing = (num) => {
  return num * 8 + 'px';
};

const getStringFromDate = (date, format) => {
  const rawMonthString = date.getMonth() + 1;
  const rawDayString = date.getDate();
  const rawHourString = date.getHours();
  const rawMinuteString = date.getMinutes();
  const rawSecondString = date.getSeconds();

  const yearString = date.getFullYear();
  const monthString = ('0' + rawMonthString).slice(-2);
  const dayString = ('0' + rawDayString).slice(-2);
  const hourString = ('0' + rawHourString).slice(-2);
  const minuteString = ('0' + rawMinuteString).slice(-2);
  const secondString = ('0' + rawSecondString).slice(-2);

  const formatString = (format || 'YYYY/MM/DD hh:mm:ss')
    .replace(/YYYY/g, yearString)
    .replace(/MM/g, monthString)
    .replace(/DD/g, dayString)
    .replace(/hh/g, hourString)
    .replace(/mm/g, minuteString)
    .replace(/ss/g, secondString);

  return formatString;
};

export {spacing, getStringFromDate};
