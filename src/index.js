const pairWise = (arr, arg) => {
  let total = 0;
  if (!arr) {
    return null;
  }
  if (!arg) {
    return null;
  }

  const tmp = [];

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i; j < arr.length; j += 1) {
      const sum = arr[i] + arr[j];
      if (sum === arg) {
        tmp[i] = j;
      }
    }
  }
  for (let i = 0; i <= tmp.length; i += 1) {
    if (tmp[i] !== undefined) {
      total += i;
    }
  }
  return total;
};
export default pairWise;
