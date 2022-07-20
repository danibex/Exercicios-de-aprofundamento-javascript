// Normal function
function maiorOuIgual(n1, n2) {
    if(n1 < n2 || n1 === n2) {
        return true
    } else {
        return false
    }
}
console.log(maiorOuIgual(0,0))
// Arrow function
const maiorOuIgualArrow = (n1, n2) => {
    if(n1 < n2 || n1 === n2) {
        return true
    } else {
        return false
    }
}
console.log(maiorOuIgualArrow(5,1))