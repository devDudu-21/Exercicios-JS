const nome = prompt('Informe o nome da espaçonave')
const character = prompt('Qual caractere você deseja substituir?')
const otherCharacter = prompt('Por qual caractere você deseja substituir?')

let novaNave = ""

for (let i = 0; i < nome.length; i++) {
    if (nome[i] === character) {
        novaNave += otherCharacter
    } else {
        novaNave += nome[i]
    }
}

alert(`O novo nome da nave é ${novaNave}`)
