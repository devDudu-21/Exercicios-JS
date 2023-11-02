function desacelerar(velocidade, printer) {
    let desaceleracao = 20

    while (velocidade > 0) {
        printer(velocidade)
        velocidade -= desaceleracao
    }

    alert(`Nave parada. As comportas podem ser abertas.`)
}

let velocidadeNave = 150
desacelerar(velocidadeNave, function (velocidade) {
    console.log(`Velocidade atual: ${velocidade}`)
})