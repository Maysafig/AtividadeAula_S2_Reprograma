//Crie um programa que me diga quanto cobrar para vender um notebook usado
// o seu custo foi R$ 30000, por quanto devo vendê-lo descontando 25% ?

// 25/100 = 0.25
// quem é 25% de 3000 ? 750
//valor total e diminuir o desconto que é 750
//resultado 2250

let valorDoProduto = 3000
let percentualDoDesconto = (25/100)
let descontoSobreProduto = valorDoProduto * percentualDoDesconto

const valorDeVenda = valorDoProduto - descontoSobreProduto

console.log('Este será o valor de venda com desconto' + ' ' + 'R$'+valorDeVenda)