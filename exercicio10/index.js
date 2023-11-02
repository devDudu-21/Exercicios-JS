const hitcheadSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let maiorQueNove = hitcheadSpaceships.filter(nave => {
    return nave[1] > 9
}).map(nave => {
    return nave[0]
})

let engatePendente = hitcheadSpaceships.findIndex(nave => {
    return nave[2] == false
})

let nomeUppercase = hitcheadSpaceships.map(nave => {
    return nave[0].toUpperCase()
})

let message = `Espaçonaves com mais de 9 tripulantes: ${maiorQueNove.join(", ")}`
message += `\nPlataforma com processo de engate: ${engatePendente + 1}`
message += `\nEspaçonaves destacadas: ${nomeUppercase.join(", ")}`
alert(message)