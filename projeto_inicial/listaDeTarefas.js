const novaTarefa = document.querySelector('[data-form-button]');

const criarTarefa = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    input.value = '';
}

novaTarefa.addEventListener('click',  criarTarefa);