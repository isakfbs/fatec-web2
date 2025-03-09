const num = 20;

export function listarPares(num) {
  const newArray = [];
  for (let i = 2; i < num; i++) {
    if (i % 2 === 0) {
      newArray.push(i);
    }
  }
  return newArray;
}

console.log(listarPares(num));
