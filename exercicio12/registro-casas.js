function salvarCasa() {
    let area = document.querySelector("input[name='area']").value
    let number = document.querySelector("input[name='number']").value
    let neighborhood = document.querySelector("input[name='neighborhood']").value
    let city = document.querySelector("input[name='city']").value

    let novaLista = document.createElement("li")
    novaLista.innerText = `${area}m², número ${number} (${neighborhood} - ${city})`

    let removerBotao = document.createElement("button")
    removerBotao.type = "button"
    removerBotao.innerText = "Remover"
    removerBotao.setAttribute("onclick", "removerCasa(this)")

    novaLista.appendChild(removerBotao)

    document.getElementById("house-list").appendChild(novaLista)
}

function removerCasa(button) {
    let liParaRemover = button.parentNode
    document.getElementById("house-list").removeChild(liParaRemover)
}