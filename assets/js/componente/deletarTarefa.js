const BotaoDeletaTarefa = () => {
    const botao = document.createElement('button');
    botao.innerHTML = 'Deletar'
    botao.addEventListener('click', deletarTarefa);

    return botao;
}

const deletarTarefa = (evento) => {
    const botaoConclui = evento.target;
    const tarefaCompleta = botaoConclui.parentElement;
    tarefaCompleta.remove();
}

export default BotaoDeletaTarefa;