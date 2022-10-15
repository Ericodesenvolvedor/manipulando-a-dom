(() => {
    const novaTarefa = document.querySelector('[data-form-button]');

    const criarTarefa = (evento) => {
        evento.preventDefault();
        const lista = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');
        const valor = input.value;
        const conteudo = `<p class="content">${valor}</p>`;

        const tarefa = document.createElement('li');
        tarefa.classList.add('task');
        tarefa.innerHTML = conteudo;
        lista.appendChild(tarefa);
        tarefa.appendChild(BotaoConcluirTarefa());

        input.value = '';
    }

    const BotaoConcluirTarefa = () => {
        const botao = document.createElement('button');
        botao.classList.add('check-button');
        botao.innerHTML = 'Concluir'
        botao.addEventListener('click', concluirTarefa);

        return botao;
    }

    const concluirTarefa = (evento) => {
        const botaoConclui = evento.target;
        const tarefaCompleta = botaoConclui.parentElement;
        tarefaCompleta.classList.toggle('done');
    }

    novaTarefa.addEventListener('click', criarTarefa);
})();