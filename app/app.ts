import { NegociacaoContorller } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoContorller();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});