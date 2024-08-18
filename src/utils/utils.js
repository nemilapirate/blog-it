export function subString(string) {
  const subString = string.substring(0, 160);

  return subString + "...";
}

export function getSomeElemetsOfArray(array, max) {
  const newArray = array.slice(0, max);

  return newArray;
}
