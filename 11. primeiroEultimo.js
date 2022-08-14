function primeiroEultimo(array) {
    return `Primeiro elemento: "${array[0]}" Segundo elemento: "${array[array.length - 1]}"`
}

const array = ["eu aqui",2,3,"aaaa"]

console.log(primeiroEultimo(array))