let array = []
function adicionandoElementos(elemento, quantidade) {
    for(i=0; i<quantidade; i++) {
        array.push(elemento)
    }
}
adicionandoElementos("Test", 7)
console.log(array)
array = []
adicionandoElementos(7, 3)
console.log(array)