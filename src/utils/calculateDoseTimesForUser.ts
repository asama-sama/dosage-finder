import IDosage from '../types/IDosage';
import IUser from '../types/IUser';
import getMedicationSchedule from './getMedicationSchedule';

const calculateDoseTimesForUser = (user: IUser) : IDosage[] => {
  const dosages:IDosage[] = user.schedules.map((schedule) => {
    const { medication } = schedule;
    const medicationSchedule = getMedicationSchedule(medication);
    return {
      medication: {
        id: medication.id,
        name: medication.name,
      },
      timestamps: medicationSchedule,
    };
  });
  return dosages;
};

export default calculateDoseTimesForUser;
