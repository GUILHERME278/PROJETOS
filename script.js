//crirar e inserir números na área do comprador
const PainelNumero = document.getElementById("numbers-grid");
const botao = document.getElementById("add-to-cart");
const preco = document.getElementById("total-price");
const ListaDeItens = document.getElementById("cart-items");
const LimparSelecao = document.getElementById("clear-selection")

for (let i = 0; i <= 100; i++) {
    //cria um elemento html
    let numero = document.createElement('div');
    //adiciona uma classe ao elemento criado
    numero.classList.add("number-item");
    //adiciona só texto no elemento criado sem a estrutura html
    numero.textContent = i;
    //adiciona a variavel já estilazada e com o número no html
    PainelNumero.appendChild(numero);
}

//para mudar a cor dos números seleciondos e futuramente pegar os dados
//seleciona os números criados com DOM
const numeros = document.querySelectorAll(".number-item");

//coloca uma evento para identificar o click
numeros.forEach((tag) => {
    tag.addEventListener('click', function () {
        tag.classList.toggle('selected');

        // ativa o botão se tiver números selecionados
        const selecionado = document.querySelectorAll(".number-item.selected");
        //retorna verdadeiro ou falso se a algum números estiver selecionado
        const algumSelecionado = Array.from(selecionado).some(el => el.classList.contains('selected'));

        if (algumSelecionado) {
            botao.disabled = false;
            LimparSelecao.disabled = false;  // ativa o botão
        } else {
            botao.disabled = true;
            LimparSelecao.disabled = true;   // desativa o botão
        }

        //Chama a função
        VerificaNumero();
    });
});

//função para mostrar preço dos números selecionados no campo
function VerificaNumero () {
  let QuantidadeNumeros = document.querySelectorAll(".number-item.selected");
  const quantidade = QuantidadeNumeros.length;
  let PrecoFinal = quantidade * 5;
  preco.textContent = PrecoFinal;
}

//Evento para adicionar os itens no carrinho
botao.addEventListener('click', function() {
    const MsgCarrinhoVazio = document.getElementById("empty-cart-row");
    let QuantidadeNumeros = document.querySelectorAll(".number-item.selected");
 
    // Converte a NodeList em um array e usa map para converter o texto para número
    const NumbersArray = Array.from(QuantidadeNumeros).map(div => Number(div.textContent));
 
    // Se houver números, esconde a mensagem de "Carrinho Vazio"
    if (NumbersArray.length > 0) {
       MsgCarrinhoVazio.classList.add('hidden'); // Esconde a mensagem de carrinho vazio
    }
 
    // Cria uma nova linha para adicionar à tabela
    let LinhaLista = document.createElement('tr');
    LinhaLista.classList.add('border-b', 'border-gray-300'); // Adiciona uma borda para separar as linhas
 
    // Cria a célula com os números (estilizados)
    let tdNumero = document.createElement('td');
    tdNumero.classList.add('text-center', 'font-bold', 'text-blue-500', 'py-3', 'px-5', 'border'); // Centraliza e estiliza
    tdNumero.textContent = NumbersArray.join(', '); // Mostra números selecionados juntos
 
    // Cria a célula com o preço (centralizado e estilizado)
    let tdPreco = document.createElement('td');
    tdPreco.classList.add('text-center', 'font-semibold', 'py-3', 'px-5', 'border'); // Centraliza e estiliza o preço
    tdPreco.textContent = 'R$ ' + (NumbersArray.length * 5).toFixed(2); // Preço total
 
    // Cria a célula com o ícone de excluir
    let ExcluirNumero = document.createElement('td');
    ExcluirNumero.classList.add('text-center', 'py-3', 'px-5', 'border'); // Centraliza o ícone de excluir
    let icon = document.createElement('i');
    icon.classList.add('fas', 'fa-trash', 'red-trash-icon');
    ExcluirNumero.appendChild(icon);
 
    // Adiciona as células à linha
    LinhaLista.appendChild(tdNumero);
    LinhaLista.appendChild(tdPreco);
    LinhaLista.appendChild(ExcluirNumero);
 
    // Adiciona a linha à tabela
    let ListaDeItens = document.querySelector('table tbody'); // Ou qualquer outro seletor para o corpo da tabela
    ListaDeItens.appendChild(LinhaLista);
 
    // Adiciona a funcionalidade de exclusão ao ícone de lixeira
    icon.addEventListener('click', function() {
       LinhaLista.remove(); // Remove a linha da tabela
    });
 
    // Remover a classe 'selected' de todos os itens
    QuantidadeNumeros.forEach(qtd => {
       qtd.classList.remove('selected');
    });
 
    // Desabilita o botão se não houver itens selecionados
    if (document.querySelectorAll(".number-item.selected").length === 0) {
       botao.disabled = true; // Desabilita o botão se não houver itens
       preco.textContent = "0,00"
    }
 });
 
 //elimina todos os números selecionados
LimparSelecao.addEventListener('click', function() {
        const Limpar = document.querySelectorAll(".number-item.selected")
        Limpar.forEach(num => {
            num.classList.remove('selected');
         });
         preco.textContent = "0,00";
         botao.disabled = true
});

//seleciona os elementos
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalButton'); // botão que abre a modal
const closeModalBtn = document.getElementById('closeModalButton'); // botão que fecha a modal

// Abrir modal ao clicar no botão
openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

// Fechar modal ao clicar no botão fechar
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Opcional: fechar modal clicando fora do conteúdo (na área escura)
modal.addEventListener('click', (e) => {
    // Se o clique for exatamente no modal (fundo escuro), fecha
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
});

// Opcional: fechar modal ao pressionar a tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      modal.classList.add('hidden');
    }
});

//limpa todas as seleções


//Mascara para CPF
function mascaraCPF(campo) {
  let cpf = campo.value.replace(/\D/g, ''); // Remove tudo que não é dígito
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  campo.value = cpf;
}

//Mascara para telefone
function mascaraTelefone(campo) {
  let tel = campo.value.replace(/\D/g, ''); // Remove tudo que não é número

  if (tel.length > 11) tel = tel.slice(0, 11); // Limita a 11 dígitos

  let formatado = "";

  if (tel.length > 0) {
      formatado += "(" + tel.substring(0, 2);
  }
  if (tel.length >= 3 && tel.length <= 6) {
      formatado += ") " + tel.substring(2);
  } else if (tel.length >= 7 && tel.length <= 10) {
      formatado += ") " + tel.substring(2, 6) + "-" + tel.substring(6);
  } else if (tel.length === 11) {
      formatado += ") " + tel.substring(2, 7) + "-" + tel.substring(7);
  }

  campo.value = formatado;
}


