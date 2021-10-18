import convertFractionToTime from './convertFractionToTime';

describe('convertFractionToTime', () => {
  test('it should convert 0.5 to 12pm', () => {
    const midday = new Date();
    midday.setUTCHours(12, 0, 0, 0);
    expect(convertFractionToTime(0.5)).toEqual(midday);
  });

  test('it should convert 0 to 12am', () => {
    const midday = new Date();
    midday.setUTCHours(0, 0, 0, 0);
    expect(convertFractionToTime(0)).toEqual(midday);
  });

  test('it should convert 0.25 to 6am', () => {
    const midday = new Date();
    midday.setUTCHours(6, 0, 0, 0);
    expect(convertFractionToTime(0.25)).toEqual(midday);
  });

  test('it should throw an error if value is 1 or higher', () => {
    expect(() => convertFractionToTime(1)).toThrowError();
  });
});
