import getMedicationSchedule from './getMedicationSchedule';
import getUserForId from './getUserForId';
import { loadTestData } from './loadData';

const users = loadTestData();

describe('getMedicationSchedule', () => {
  test('sets schedule correctly for 2 doses', () => {
    const user = getUserForId(users, '1');
    const schedule = getMedicationSchedule(user.schedules[0].medication);
    const t1 = new Date();
    t1.setUTCHours(8, 0, 0, 0);
    const t2 = new Date();
    t2.setUTCHours(16, 0, 0, 0);
    expect(schedule).toEqual([t1, t2]);
  });

  test('empty for 0 doses', () => {
    const schedule = getMedicationSchedule({
      id: 'id',
      name: 'name',
      doses_per_day: 0,
    });
    expect(schedule.length).toBe(0);
  });

  test('100 length schedule for 100 doses', () => {
    const schedule = getMedicationSchedule({
      id: 'id',
      name: 'name',
      doses_per_day: 100,
    });
    expect(schedule.length).toBe(100);
  });
});
