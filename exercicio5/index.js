let contagem = 0
let opcao = ""
let nome = prompt('Digite o nome da nave.')
opcao = confirm('Deseja entrar em dobra espacial?')

while (opcao === true) {
    contagem++
    opcao = confirm("Deseja realizar a próxima dobra?")
}

alert(`
Nome da nave: ${nome}
Quantidade de dobras: ${contagem}
`)