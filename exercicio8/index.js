let nome = prompt('Informe o nome da nave')
let velocidade = 0

let escolherOpcao

function showMenu() {
    let opcao
    while (opcao !== "1" && opcao != "2" && opcao != "3" && opcao != "4") {
        opcao = prompt(`O que deseja fazer?\n
                1 - Acelerar a nave em 5km/s\n
                2 - Desacelerar a anve em 5m/s\n
                3 - Imprimir dados de bordo\n
                4 - Sair`)
    }

    return opcao
}

function acelerar(velocidade) {
    let novaVelocidade = velocidade + 5
    return novaVelocidade
}

function desacelerar(velocidade) {
    let novaVelocidade = velocidade - 5
    if (novaVelocidade < 0) {
        novaVelocidade = 0
    }
    return novaVelocidade
}

function print(name, velocidade) {
    alert(` Espaçonave: ${name}
            Velocidade: ${velocidade} km/s`)
}
do {
    escolherOpcao = showMenu()
    switch (escolherOpcao) {
        case "1":
            velocidade = acelerar(velocidade)
            break;
        case "2":
            velocidade = desacelerar(velocidade)
            break;
        case "3":
            print(nome, velocidade)
            break;
        default:
            alert('Encerrando programa de bordo...')
            break;
    }
} while (escolherOpcao != "4")