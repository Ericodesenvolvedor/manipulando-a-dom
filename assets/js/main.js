import { handleNovoItem } from "./componente/criarTarefa.js";
import { carregaTarefa } from "./componente/carregaTarefa.js";
const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', handleNovoItem)

carregaTarefa()