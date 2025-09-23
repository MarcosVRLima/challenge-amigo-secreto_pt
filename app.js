// 1. Inicia declarando uma variável do tipo array para armazenar os nomes.
let amigos = [];

/**
 * Função para adicionar amigos à lista.
 */
function adicionarAmigo() {
    // Captura o elemento de entrada e o seu valor.
    const campoAmigo = document.getElementById('amigo');
    const nomeAmigo = campoAmigo.value.trim(); // .trim() remove espaços em branco no início e no fim

    // Valida se a entrada não está vazia.
    if (nomeAmigo === '') {
        alert("Por favor, insira um nome.");
        return; // Encerra a função se o campo estiver vazio.
    }

    // Valida se o nome já foi adicionado
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado. Por favor, insira um nome diferente.");
        campoAmigo.value = ''; // Limpa o campo
        return;
    }

    // Adiciona o nome ao array de amigos.
    amigos.push(nomeAmigo);

    // Atualiza a lista de amigos exibida na tela.
    atualizarListaAmigos();

    // Limpa o campo de entrada para a próxima inserção.
    campoAmigo.value = '';
    campoAmigo.focus(); // Coloca o foco de volta no campo de input
}

/**
 * Função para atualizar a exibição da lista de amigos no HTML.
 */
function atualizarListaAmigos() {
    // Obtém o elemento da lista (UL).
    const lista = document.getElementById('listaAmigos');

    // Limpa a lista existente para evitar duplicatas.
    lista.innerHTML = "";

    // Percorre o array de amigos e cria um elemento <li> para cada um.
    for (let i = 0; i < amigos.length; i++) {
        // Cria um novo elemento de lista.
        const item = document.createElement('li');
        item.textContent = amigos[i]; // Define o texto do item como o nome do amigo.
        
        // Adiciona o item à lista no HTML.
        lista.appendChild(item);
    }
}

/**
 * Função para sortear um amigo da lista.
 */
function sortearAmigo() {
    // Obtém o elemento onde o resultado será exibido.
    const resultado = document.getElementById('resultado');

    // Valida se há amigos suficientes para o sorteio.
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio.");
        return; // Encerra a função.
    }

    // Gera um índice aleatório dentro do tamanho do array.
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome do amigo sorteado usando o índice.
    const amigoSorteado = amigos[indiceSorteado];

    // Mostra o resultado na tela.
    resultado.innerHTML = `<p>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></p>`;
}