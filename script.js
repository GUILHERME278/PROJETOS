// Constantes principais
const PRECO_POR_NUMERO = 5;
const PainelNumero = document.getElementById("numbers-grid");
const botao = document.getElementById("add-to-cart");
const preco = document.getElementById("total-price");
const ListaDeItens = document.getElementById("cart-items");
const LimparSelecao = document.getElementById("clear-selection");

// Gera números de 0 a 100 no painel
for (let i = 1; i <= 100; i++) {
    const numero = document.createElement('div');
    numero.classList.add("number-item");
    numero.textContent = i;
    PainelNumero.appendChild(numero);
}

// Adiciona eventos aos números
document.querySelectorAll(".number-item").forEach((tag) => {
    tag.addEventListener('click', () => {
        tag.classList.toggle('selected');
        const selecionados = document.querySelectorAll(".number-item.selected");
        const algumSelecionado = selecionados.length > 0;

        botao.disabled = !algumSelecionado;
        LimparSelecao.disabled = !algumSelecionado;

        VerificaNumero();
    });
});

// Atualiza o preço total
function VerificaNumero() {
    const quantidade = document.querySelectorAll(".number-item.selected").length;
    const PrecoFinal = quantidade * PRECO_POR_NUMERO;
    preco.textContent = PrecoFinal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Evento para adicionar os itens ao carrinho
botao.addEventListener('click', () => {
    const MsgCarrinhoVazio = document.getElementById("empty-cart-row");
    const selecionados = document.querySelectorAll(".number-item.selected");
    const NumbersArray = Array.from(selecionados).map(div => Number(div.textContent));

    if (NumbersArray.length > 0) {
        MsgCarrinhoVazio.classList.add('hidden');
    }

    const LinhaLista = document.createElement('tr');
    LinhaLista.classList.add('border-b', 'border-gray-300');

    const tdNumero = document.createElement('td');
    tdNumero.classList.add('text-center', 'font-bold', 'text-blue-500', 'py-3', 'px-5', 'border');
    tdNumero.textContent = NumbersArray.join(', ');

    const tdPreco = document.createElement('td');
    tdPreco.classList.add('text-center', 'font-semibold', 'py-3', 'px-5', 'border');
    tdPreco.textContent = (NumbersArray.length * PRECO_POR_NUMERO).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const ExcluirNumero = document.createElement('td');
    ExcluirNumero.classList.add('text-center', 'py-3', 'px-5', 'border');
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-trash', 'red-trash-icon');
    ExcluirNumero.appendChild(icon);

    LinhaLista.appendChild(tdNumero);
    LinhaLista.appendChild(tdPreco);
    LinhaLista.appendChild(ExcluirNumero);
    ListaDeItens.appendChild(LinhaLista);

    icon.addEventListener('click', () => {
        LinhaLista.remove();
    });

    // Limpa seleção e desativa botões
    selecionados.forEach(qtd => qtd.classList.remove('selected'));
    botao.disabled = true;
    LimparSelecao.disabled = true;
    preco.textContent = (0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
});

// Limpa seleção manual
LimparSelecao.addEventListener('click', () => {
    document.querySelectorAll(".number-item.selected").forEach(num => {
        num.classList.remove('selected');
    });
    preco.textContent = (0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    botao.disabled = true;
    LimparSelecao.disabled = true;
});

// Modal
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalButton');
const closeModalBtn = document.getElementById('closeModalButton');

openModalBtn?.addEventListener('click', () => {
    modal.classList.remove('hidden');
});
closeModalBtn?.addEventListener('click', () => {
    modal.classList.add('hidden');
});
modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
});
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") modal.classList.add('hidden');
});

// Máscaras
function mascaraCPF(campo) {
    let cpf = campo.value.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    campo.value = cpf;
}

function mascaraTelefone(campo) {
    let tel = campo.value.replace(/\D/g, '');
    if (tel.length > 11) tel = tel.slice(0, 11);
    let formatado = "";
    if (tel.length > 0) formatado += "(" + tel.substring(0, 2);
    if (tel.length >= 3 && tel.length <= 6) {
        formatado += ") " + tel.substring(2);
    } else if (tel.length >= 7 && tel.length <= 10) {
        formatado += ") " + tel.substring(2, 6) + "-" + tel.substring(6);
    } else if (tel.length === 11) {
        formatado += ") " + tel.substring(2, 7) + "-" + tel.substring(7);
    }
    campo.value = formatado;
}
