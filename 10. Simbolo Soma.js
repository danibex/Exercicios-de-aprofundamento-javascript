function simboloSoma(quantidade) {
    let valor = ""
    for(i=0; i<quantidade; i++) {
        valor += "+ "
    }
    return valor
}

console.log(simboloSoma(4))