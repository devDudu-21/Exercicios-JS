let nome = prompt('Qual o nome da espaçonave?')

let nomeInvertido = ""
for (let i = nome.length - 1; i >= 0; i--) {
    if (nome[i] == "e") {
        break
    }
    nomeInvertido += nome[i]
}

alert(`
    Nome original da nave: ${nome}
    Nome após ocultação: ${nomeInvertido}
    `)