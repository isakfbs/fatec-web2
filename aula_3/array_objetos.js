//coleção de objetos no array
// posições                   0                         1
function arrays_objetos(){
    const livros = [ {titulo:"javascript", preco: 34}, {titulo:"html", preco: 23} ]
    console.log(typeof livros[0])
    console.log(typeof livros[0].titulo)
    console.log(livros[0].titulo)
};
module.exports = arrays_objetos;