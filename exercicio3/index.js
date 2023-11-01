const nome = prompt('Informe o nome do piloto.')
let velocidadeNave = 0
let novaVelocidade = prompt('A que velocidade você deseja navegar.')
let confirma = confirm(`Deseja acelerar a nave para ${novaVelocidade} km/s?`)
if (!confirma) {
    novaVelocidade = 0
    alert(`A velocidade não foi confirmada e por motivos de segurança a nave está voltando para ${velocidadeNave} km/s`)
} else {
    alert(`Acelerando nave para: ${novaVelocidade}km/s`)
}
if (novaVelocidade < 0) {
    alert(`Nave está parada. Considere partir e aumentar a velocidade.`)
}
if (novaVelocidade < 40) {
    alert(`Parece uma boa velocidade para manter.`)
}
if (novaVelocidade >= 80 && novaVelocidade < 100) {
    alert(`Velocidade alta, considere diminuir.`)
}
if (novaVelocidade >= 100) {
    alert(`Velocidade perigosa. Controle automático forçado.`)
}
alert(`
Nome do piloto: ${nome}
Velocidade atual: ${novaVelocidade}
`)
