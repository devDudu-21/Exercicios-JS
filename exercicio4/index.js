const valor = prompt('Qual a distância em anos-luz que você deseja converter?')
let opcao = prompt(`
Para qual unidade de medida você deseja converter?
1 - Parsec(pc)
2 - Unidade astronômica (AU)
3 - Quilômetros(km)
`)
let unidade
let conversão

switch (opcao) {
    case '1':
        unidade = 'Parsec'
        conversão = (valor * 0.306601)

        break;
    case '2': unidade = 'Unidade Astronômica'
        conversão = (valor * 63241.1)

        break;
    case '3': unidade = 'Quilômetros'
        conversão = (valor * (9.5 * Math.pow(10, 12)))
        break;
    default:
        unidade = 'Unidade não identificada'
        conversão = 'Conversão fora do escopo'
        break;
}

alert(`
        Distância em anos-luz: ${valor}\n
        Distância convertida: ${conversão} : ${unidade}
        `)