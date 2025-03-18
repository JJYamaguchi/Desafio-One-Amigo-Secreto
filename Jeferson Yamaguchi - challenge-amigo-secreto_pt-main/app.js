//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    nomeInput.value = "";
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (const amigo of amigos) {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    const amigosEmbaralhados = [...amigos].sort(() => Math.random() - 0.5);
    const pares = [];

    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        const amigo = amigosEmbaralhados[i];
        const amigoSecreto = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length];
        pares.push({ amigo, amigoSecreto });
    }

    pares.forEach(par => {
        const item = document.createElement("li");
        item.textContent = `${par.amigo} tirou ${par.amigoSecreto}`;
        resultadoLista.appendChild(item);
    });
}