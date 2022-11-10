import { Tarefa } from "./criarTarefa.js"

export const carregaTarefa = () => {
    const lista = document.querySelector("[data-list]")
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = " "

    tarefaCadastradas.forEach(tarefa => {
        lista.appendChild(Tarefa(tarefa))
    })
}