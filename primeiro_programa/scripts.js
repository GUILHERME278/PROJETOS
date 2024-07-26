// mapeando elemntos do html
const button = document.querySelector('.add_tarefa')
const input = document.querySelector('.tarefa')
const listacomleta = document.querySelector('.lista')
// array
let minhalista = []
/*função para adicionar itens a lista de tarefas e chamar a proxima função  OBS: "event.preventDefault()" é um parametro para evitar que a página recarregue*/
function adiciona(event) {
    minhalista.push({
        tarefa: input.value,
        concluida: false
    })
    event.preventDefault()
    input.value = ''
    mostrartarefa()
}
/* função para adicionar a nova tarefa sem que ela seja sobreposta sobre a ultima e tambem mudar o que está escrito na tarefa por meio de uma variavel chmada tarefa "${tarefa} e mandar toda a estrutura de html criada abaixo para mudar o html por meio do "innerHTML" que permite mecher com estrutura HTML OBS: esssas ações envolve DOM*/

function mostrartarefa() {
    let novali = ''

    minhalista.forEach((item, posicao) => {
        novali = novali + `
         <li class="task ${item.concluida && "done"}" >
         <img src="./img/confirme.png" alt="check-na-tarefa" onclick="concluirtarefa(${posicao})">
         <p>${item.tarefa}</p>
         <img src="./img/deposito-de-lixo.png" alt="icone de excluir tarefa" onclick="deletaritem(${posicao})">
        </li>
    `
    })

    listacomleta.innerHTML = novali

    localStorage.setItem('lista', JSON.stringify)
}
// pego meu array na posição desejada e todas as tarefas que estão em false para colocar ela para true é todo esse codigo igual só que com uma exclamação para inverter o valor da tarefa para true
function concluirtarefa(posicao){
    minhalista[posicao].concluida = !minhalista[posicao].concluida
    mostrartarefa()
}

/* o foreach tem um parametro que indica aposição do item por esse parametro podemos ifentificar a tarefa para exclui-la pelo metodo splice que permite a manipulçaõ de arrays*/
function deletaritem(posicao) {
    minhalista.splice(posicao, 1)
    mostrartarefa()
}


// verifica quando ocorre a evento para chamar a função
button.addEventListener('click', adiciona)