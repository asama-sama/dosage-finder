import IMedication from '../types/IMedication';
import convertFractionToTime from './convertFractionToTime';

// for a medication with a given number of doses, find the schedule such that
// those doses are spaced out evenly throughout the day
const getMedicationSchedule = (medication: IMedication) : Date[] => {
  const { doses_per_day: dosesPerDay } = medication;
  let doses:Date[] = [];
  const doseIntervals = dosesPerDay + 1; // think of doseIntervals as the times between the doses

  for (let i = 1; i < doseIntervals; i += 1) {
    const fraction = i / doseIntervals;
    const doseTime = convertFractionToTime(fraction);
    doses = [...doses, doseTime];
  }
  return doses;
};

export default getMedicationSchedule;
