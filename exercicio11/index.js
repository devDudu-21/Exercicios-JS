let nave = {
    velocidade: 0,
    acelerar: function (aceleracao) {
        this.velocidade += aceleracao
    }
}

function registrarNave() {
    nave.nome = prompt("Informe o nome da nave")
    nave.tipo = prompt("Informe o tipo da nave")
    nave.velocidadeMaxima = Number(prompt("Informe a velocidade máxima da nave (km/s)"))
}

function acelerar() {
    let aceleracao = Number(prompt("Quanto você quer acelerar? (km/s)"))
    nave.acelerar(aceleracao)
    if (nave.velocidade > nave.velocidadeMaxima) {
        alert(`
        VELOCIDADE MÁXIMA ULTRAPASSADA!
        \nVelocidade da nave: ${nave.velocidade} km/s
        \nVelocidade máxima da nave: ${nave.velocidadeMaxima} km/s`)
    }
}

function parar() {
    alert(`
    Nome: ${nave.nome}
    \nTipo: ${nave.tipo}
    \nVelocidade da nave: ${nave.velocidade}
    \nVelocidade máxima: ${nave.velocidadeMaxima}`)
    nave.velocidade = 0
}

function mostrarMenu() {
    let escolherOpcao
    do {
        escolherOpcao = prompt(`Você deseja:\n1 - Acelerar\n2 - Parar`)
        switch (escolherOpcao) {
            case "1":
                acelerar()
                break;
            case "2":
                parar()
                break;
            default:
                alert(`Opção inválida`)
                break;
        }
    } while (escolherOpcao != "2")
}

registrarNave()
mostrarMenu()