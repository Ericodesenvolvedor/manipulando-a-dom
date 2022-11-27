import { CarregaTarefa } from "./componente/CarregaTarefa.js";
import { HandleNovoItem } from "./componente/CriarTarefa.js";

const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', HandleNovoItem)

CarregaTarefa()