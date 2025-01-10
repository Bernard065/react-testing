export const lbsToKilos = (lbs: number): number => {
  const kilos = lbs * 0.45359237;
  return parseFloat(kilos.toFixed(2));
};
