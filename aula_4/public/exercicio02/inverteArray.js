export function inverter(array) {
  console.log(`Inverter o array: [${array}]`);
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
