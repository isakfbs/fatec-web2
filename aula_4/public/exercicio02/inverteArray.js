export function inverter(array) {
  console.log(`Inverter o array: [${array}]`);
  const newArray = [];
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    newArray.push(array.pop());
  }
  return newArray;
}
