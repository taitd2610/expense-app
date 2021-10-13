export const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const percentage = (partialValue, totalValue) => {
  return ((100 * partialValue) / totalValue).toFixed(2);
};
