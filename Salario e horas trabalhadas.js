// Normal function
function calcularSalario(horasTrabalhadas, salario) {
    total = horasTrabalhadas * salario
    return `Salário igual a R$ ${total.toFixed(2).replace(".",",")}`
}
console.log(calcularSalario(150, 40.5)) // Salário igual a R$ 6075,00

// Arrow function
const calcularSalarioArrow = (horasTrabalhadas, salario) => {
    total = horasTrabalhadas * salario
    return `Salário igual a R$ ${total.toFixed(2).replace(".",",")}`
}
console.log(calcularSalarioArrow(120, 17.85)) // Salário igual a R$ 2142,00