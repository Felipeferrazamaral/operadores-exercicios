
// pratica 1

let op1 = 5 > 20 && 5 < 2

let op2 = 5 === 5 || 5 ===`5`

let op3 = !(20 > 50)

let op4 = !(20 > 50 || 50 > 60)

console.log(op1, op2 , op3 , op4)

// pratica 2
 let salario = 2000
 let auxilioCreche = 45.5 * 2
 
 
 
 

 // 1
 let resultado1 = salario + auxilioCreche
 console.log(resultado1)
// 2
let comissaoJaneiro = 5784.50 * 0.1
console.log(comissaoJaneiro)
//3
let salarioDescontoJaneiro = (salario + comissaoJaneiro) * 0.05
console.log(salarioDescontoJaneiro)
//4
let salarioLiquidoJaneiro = (resultado1 + comissaoJaneiro) - salarioDescontoJaneiro
console.log(salarioLiquidoJaneiro)

let comissaoFevereiro = 3418.41 * 0.1
let salarioDescontoFevereiro = (salario + comissaoFevereiro) * 0.05
let salarioLiquidoFevereiro = (resultado1 + comissaoFevereiro) - salarioDescontoFevereiro
console.log(comissaoFevereiro , salarioDescontoFevereiro , salarioLiquidoFevereiro)

let comissaoMarco = 4124.10 * 0.1
let salarioDescontoMarco = (salario + comissaoMarco) * 0.05
let salarioLiquidoMarco = (resultado1 + comissaoMarco) - salarioDescontoMarco

console.log(salarioLiquidoMarco)

let comissaoAbril = 1874 * 0.1
let salarioDescontoAbril = (salario + comissaoAbril) * 0.05
let salarioLiquidoAbril = (resultado1 + comissaoAbril) - salarioDescontoAbril
console.log(salarioLiquidoAbril)

let comissaoMaio = 7000 * 0.1
let salarioDescontoMaio = (salario + comissaoMaio) * 0.05
let salarioLiquidoMaio = (resultado1 + comissaoMaio) - salarioDescontoMaio
console.log(salarioLiquidoMaio)

let comissaoJunho = 9450 * 0.1
let salarioDescontoJunho = (salario + comissaoJunho) * 0.05
let salarioLiquidoJunho = (resultado1 + comissaoJunho) - salarioDescontoJunho
console.log(salarioLiquidoJunho)
//5
let MediaDoSalarioSemestral = (salarioLiquidoJaneiro + salarioLiquidoFevereiro + salarioLiquidoMarco + salarioLiquidoAbril + salarioLiquidoMaio + salarioLiquidoJunho) / 6
console.log(MediaDoSalarioSemestral)
