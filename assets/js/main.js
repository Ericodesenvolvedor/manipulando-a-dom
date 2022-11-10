import { handleNovoItem } from "./componente/criarTarefa.js";

const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', handleNovoItem)