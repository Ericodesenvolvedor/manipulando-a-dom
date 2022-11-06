import BotaoConcluirTarefa from "./componente/concluirTarefa.js";
import BotaoDeletaTarefa from "./componente/deletarTarefa.js";

const novaTarefa = document.querySelector('[data-form-button]');

const handleNovoItem = (evento) => {
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)

    const dataFormatada = data.format('DD/MM/YYYY')

    const dados = { 
        valor,
        dataFormatada
    }

    const criaTarefa = criarTarefa(dados)

    lista.appendChild(criaTarefa)

    input.value = " "
}

const criarTarefa = ({valor, dataFormatada}) => {
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');

    const conteudo = `<p class="content">${dataFormatada}${valor}</p>`;
    
    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConcluirTarefa());
    tarefa.appendChild(BotaoDeletaTarefa());

    return tarefa;
}

novaTarefa.addEventListener('click', handleNovoItem);