import calculateDoseTimesForUser from '../utils/calculateDoseTimesForUser';
import getUserForId from '../utils/getUserForId';
import loadData from '../utils/loadData';

const getDosagesForUser = (req: any, res: any) => {
  try {
    const users = loadData();
    const user = getUserForId(users, req.params.userId);
    const schedules = calculateDoseTimesForUser(user);
    res.send(schedules);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
};

export default getDosagesForUser;
