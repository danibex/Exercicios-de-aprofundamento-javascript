const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
// Normal function
function mesString(mes) {
    return meses[mes - 1]
}
console.log(mesString(2)) // Fevereiro
// Arrow function
const mesStringArrow = mes => meses[mes - 1]
console.log(mesStringArrow(5))