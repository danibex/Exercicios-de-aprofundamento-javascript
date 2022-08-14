function intervalo(valor, minimo, maximo, inclusivo = false) {
    if(inclusivo == true) {
        if(valor >= minimo && valor <= maximo) {
            return console.log(true)
        } else {
            return console.log(false)
        }
    } else {
        if(valor >= minimo && valor <= maximo) {
            return console.log(false)
        } else {
            return console.log(true)
        }
    }
}

intervalo(6, 5, 10, false)