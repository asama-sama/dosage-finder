import IUser from '../types/IUser';
import jsonData from '../../data/healthdata.json';
import testJsonData from '../__test_objects/users.testdata.json';

let userData : IUser[];
const loadData = () => {
  if (!userData) userData = <IUser[]>jsonData.users;
  return userData;
};

const loadTestData = () => {
  if (!userData) userData = <IUser[]>testJsonData.users;
  return userData;
};

export default loadData;
export { loadTestData };
