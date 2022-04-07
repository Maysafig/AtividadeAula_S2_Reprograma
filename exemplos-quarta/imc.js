//Escreva um programa que recebe uma altura em metros 
//e o peso em kg e calcule o IMC.

//imc = peso / (altura * altura)

const pesoKg = 80
const alturaM = 1.7
const valorIMC = (pesoKg / (alturaM * alturaM)).toFixed(2)

console.log(valorIMC)