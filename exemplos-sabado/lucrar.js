//Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?

//60% -> 300
//100% -> X

let sessentaPorCento = 300 
let cemPorCento = (300*100)/60
let vinteECincoPorCento = cemPorCento * (25/100)

let vendaComLucro = cemPorCento + vinteECincoPorCento

console.log(cemPorCento, vinteECincoPorCento, vendaComLucro)

