// Normal function
function idadeEmDias(idade) {
    return idade*365
}
console.log(idadeEmDias(24)) // 8760

// Arrow function
const idadeEmDiasArrow = idade => idade * 365
console.log(idadeEmDiasArrow(23)) // 8395