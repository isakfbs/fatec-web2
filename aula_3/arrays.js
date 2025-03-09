//  posições     0     1  
const fila = []
function arrays(idade){
//metodos para adicionar
if(idade >= 65){
    fila.unshift(idade)
}else{
    fila.push(idade)
}

// console.log(fila)
//metodos para remover
// fila.pop()
// fila.shift()

//recortar parte do array
// const parte = fila.slice(1,3)
// console.log(parte)
console.log(fila)
}

arrays(35);
arrays(70);
arrays(20);

module.exports = arrays;