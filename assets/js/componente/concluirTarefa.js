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

export default BotaoConcluirTarefa;