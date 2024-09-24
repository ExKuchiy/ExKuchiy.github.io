let carrinho = []
let total = 0.0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({nome:nome, preco:preco});
    atualizarCarrinho();
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoElement = document.getElementById('carrinho');
    const totalElement = document.getElementById('total');

    carrinhoElement.innerHTML = '';
    total = 0

    carrinho.forEach((item, index) => {
        total += item.preco;
        carrinhoElement.innerHTML += `
        <li>${item.nome} - R$${item.preco.toFixed(2)}
            <button onclick="removerDoCarrinho(${index})">Remover</button>
        </li>`;
    });

    totalElement.innerText = `Total: R$${total.toFixed(2)}`;
}