let student = prompt('Qual o nome do(a) aluno(a)?')

let n1 = prompt('Qual a nota da primeira prova?')
let n2 = prompt('Qual a nota da segunda prova?')
let n3 = prompt('Qual a nota da terceira prova?')

let average = ((Number(n1) + Number(n2) + Number(n3)) / 3).toFixed(2)

if(average > 6) {
  alert (`Parabéns ${student}, sua média foi: ${average}`)
} else {
  alert(`${student}, estude para sua prova de recuperação, sua média foi ${average}`)
}