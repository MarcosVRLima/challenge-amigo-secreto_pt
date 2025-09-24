# Sorteio de Amigo Secreto

![Demonstração do Projeto](assets/amigo-secreto.png)

## 📖 Sobre o Projeto

Este é um projeto simples e interativo para realizar sorteios de amigo secreto. A aplicação foi desenvolvida como um desafio de lógica de programação proposto pelo programa **ONE (Oracle Next Education)**, uma parceria educacional entre a **Alura** e a **Oracle**.

O principal objetivo do desafio é praticar a manipulação do DOM (Document Object Model) utilizando JavaScript puro (Vanilla JS), além de consolidar conceitos fundamentais de HTML5 e CSS3.

---

## ✨ Funcionalidades Principais

-   **Adicionar Amigos:**
    -   Permite inserir o nome dos participantes um por um.
    -   Validação para não aceitar nomes em branco.
    -   Validação para impedir a adição de nomes duplicados na lista.

-   **Listar Participantes:**
    -   Os nomes adicionados são exibidos dinamicamente em uma lista na tela, permitindo que o usuário veja todos que estão participando.

-   **Realizar o Sorteio:**
    -   Um botão "Sortear" aciona a lógica que escolhe um nome aleatório da lista.
    -   O sistema verifica se há participantes suficientes (mínimo de 2) antes de realizar o sorteio.
    -   O resultado é exibido de forma clara na tela.

-   **Interface Limpa:**
    -   Layout simples e intuitivo, focado na usabilidade e na experiência do usuário.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

-   **HTML5:** Para a estrutura semântica da página.
-   **CSS3:** Para a estilização e o design responsivo.
-   **JavaScript (Vanilla JS):** Para toda a lógica de programação, interatividade e manipulação do DOM.

---

## ⚙️ Como Executar

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [[https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)](https://github.com/MarcosVRLima/challenge-amigo-secreto_pt.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd seu-repositorio
    ```
3.  **Abra o arquivo `index.html` no seu navegador:**
    -   Você pode simplesmente clicar duas vezes no arquivo ou arrastá-lo para a janela do seu navegador de preferência.

E pronto! A aplicação estará funcionando.

---

## 📁 Estrutura do Projeto

```
/
├── assets/
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
├── index.html
├── style.css
└── app.js
```

-   **`index.html`**: Contém a estrutura principal da página.
-   **`style.css`**: Contém todos os estilos para o design da aplicação.
-   **`app.js`**: Onde reside toda a lógica do sorteio, adição de amigos e manipulação dos elementos da página.
-   **`assets/`**: Pasta que armazena as imagens utilizadas na interface.
