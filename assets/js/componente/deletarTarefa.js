const BotaoDeletaTarefa = () => {
    const botao = document.createElement('button');
    botao.innerHTML = 'Deletar'
    botao.addEventListener('click', DeletarTarefa);

    return botao;
}

const DeletarTarefa = (evento) => {
    const botaoConclui = evento.target;
    const tarefaCompleta = botaoConclui.parentElement;
    tarefaCompleta.remove();
}

export default BotaoDeletaTarefa;