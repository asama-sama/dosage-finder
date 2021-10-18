import ISchedule from './ISchedule';

interface IUser {
  id: string,
  firstName: string,
  lastName: string,
  schedules: ISchedule[]
}

export default IUser;
