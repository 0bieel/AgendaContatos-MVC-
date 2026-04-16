import {
    renderTabela,
    salvarContato,
    removerContato
} from './controller/AgendaController.mjs';

Object.assign(window, {
    renderTabela,
    salvarContato,
    removerContato
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');
    form.addEventListener('submit', salvarContato);
    renderTabela();
});