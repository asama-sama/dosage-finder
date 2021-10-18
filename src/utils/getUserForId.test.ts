import IUser from '../types/IUser';
import getUserForId from './getUserForId';
import { loadTestData } from './loadData';

const users: IUser[] = loadTestData();

describe('getUserForId', () => {
  test('it gets the correct user', () => {
    const user = getUserForId(users, '2');
    if (user === undefined) throw new Error('User not found');
    expect(user.firstName).toBe('John');
  });

  test('it throws an error if it can\'t find the user', () => {
    expect(() => getUserForId(users, '4000')).toThrowError();
  });
});
