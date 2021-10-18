// takes a fraction between 0 and 1 and returns that time out of 24 hours
// for the current day
const convertFractionToTime = (fraction: number) : Date => {
  if (fraction >= 1 || fraction < 0) throw new Error('convertFractionToTime: fraction x must be 0 <= x < 1');
  const secondsInDay = 60 * 60 * 24;
  const fractionOfSecondsInDay = secondsInDay * fraction;

  const hours = fractionOfSecondsInDay / (60 * 60);
  const remainder = fractionOfSecondsInDay % (60 * 60);
  const minutes = remainder / 60;
  const seconds = remainder % 60;

  const time = new Date();
  time.setUTCHours(hours, minutes, seconds, 0);
  return time;
};

export default convertFractionToTime;
