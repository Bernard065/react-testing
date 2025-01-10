export const lbsToKilos = (lb: number) => {
  const kilos = lb * 0.45359237;
  return kilos.toFixed(2);
};
