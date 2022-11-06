import BotaoConcluirTarefa from "./componente/concluirTarefa.js";
import BotaoDeletaTarefa from "./componente/deletarTarefa.js";

const novaTarefa = document.querySelector('[data-form-button]');

const criarTarefa = (evento) => {
    evento.preventDefault();
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    
    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value);
    console.log(data.format("DD/MM/YYYY"))

    const conteudo = `<p class="content">${valor}</p>`;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    tarefa.innerHTML = conteudo;
    lista.appendChild(tarefa);
    tarefa.appendChild(BotaoConcluirTarefa());
    tarefa.appendChild(BotaoDeletaTarefa());

    input.value = '';
}

novaTarefa.addEventListener('click', criarTarefa);