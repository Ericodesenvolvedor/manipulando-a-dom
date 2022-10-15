const novaTarefa = document.querySelector('[data-form-button]');

const criarTarefa = (evento) => {
    evento.preventDefault();
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    const conteudo  = `<p class="content">${valor}</p>`;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    tarefa.innerHTML = conteudo;
    lista.appendChild(tarefa);

    input.value = '';
}

novaTarefa.addEventListener('click',  criarTarefa);