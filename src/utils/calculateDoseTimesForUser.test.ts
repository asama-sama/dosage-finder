import calculateDoseTimesForUser from './calculateDoseTimesForUser';
import getUserForId from './getUserForId';
import { loadTestData } from './loadData';

const users = loadTestData();

describe('calculateDoseTimesForUser', () => {
  test('it should return the correct dose times when a user has 1 medication', () => {
    const user = getUserForId(users, '1');
    const dosage = calculateDoseTimesForUser(user);
    const schedule = dosage[0];
    expect(schedule.timestamps.length).toBe(2);
    expect(schedule.medication.id).toBe('pristiq');
  });

  test('it should return the correct dose times when a user has 2 medications', () => {
    const user = getUserForId(users, '2');
    const dosage = calculateDoseTimesForUser(user);
    const [schedule1, schedule2] = dosage;
    expect(schedule1.timestamps.length).toBe(3);
    expect(schedule1.medication.id).toBe('lipitor');
    expect(schedule2.medication.id).toBe('norvasc');
    expect(schedule2.timestamps.length).toBe(1);
  });
});
