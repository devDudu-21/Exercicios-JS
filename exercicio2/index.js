const nomeMaisVelha = prompt('Informe o nome da pessoa mais velha')
const idadeMaisVelha = prompt('Informe a idade da pessoa mais velha')

const nomeMaisNova = prompt('Informe o nome da pessoa mais nova')
const idadeMaisNova = prompt('Informe a idade da pessoa mais nova')

let diferenca = idadeMaisVelha - idadeMaisNova
alert(`
Nome da pessoa mais velha: ${nomeMaisVelha}
Idade: ${idadeMaisVelha}

Nome da pessoa mais nova: ${nomeMaisNova}
Idade: ${idadeMaisNova}

Diferença de idade: ${diferenca}
    `)

