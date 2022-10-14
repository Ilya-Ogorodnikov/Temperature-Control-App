import {
  COLD_TEMPERATURE_LIMIT,
  HOT_TEMPERATURE_LIMIT,
  NORMAL_TEMPERATURE_LOWER_BOUNDRY,
  NORMAL_TEMPERATURE_UPPER_BOUNDRY,
  COLD,
  HOT,
  NORMAL
} from '../constants/temperature';

export const backgroundIndicator = (temperature: number) => {
  if (temperature <= COLD_TEMPERATURE_LIMIT) {
    return COLD;
  }

  if (
    temperature >= NORMAL_TEMPERATURE_LOWER_BOUNDRY &&
    temperature <= NORMAL_TEMPERATURE_UPPER_BOUNDRY
  ) {
    return NORMAL;
  }

  if (temperature >= HOT_TEMPERATURE_LIMIT) {
    return HOT;
  }

  return COLD;
};
