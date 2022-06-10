export const formatEmptyData = (name, value) => {
  if ((isNaN(parseInt(name)) || !name) && (isNaN(parseInt(value)) || !value)) {
    return Math.floor(Math.random() * 1000000);
  }
  return `${name}-${value}`;
};
