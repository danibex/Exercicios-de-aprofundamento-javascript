function inverso(valor) {
    tipo = typeof valor
    if(tipo == "boolean") {
        return !valor
    } else if(tipo == "number") {
        return valor*-1
    } else {
        return `Booleano ou números esperado, mas o parâmetro é do tipo string`
    }
}

console.log(inverso(true)) 
console.log(inverso("6")) 
console.log(inverso(-2000)) 
console.log(inverso("programação"))
