import { AgendaService } from '../service/AgendaService.mjs';
import { Contato } from '../model/Contato.mjs';

const agendaService = new AgendaService();

function getTbody() {
    return document.querySelector('#lista-contatos tbody');
}

export function renderTabela() {
    const contatos = agendaService.getContatos();
    const tbody = getTbody();
    tbody.innerHTML = '';

    contatos.forEach(contato => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contato.nome}</td>
            <td>${contato.telefone}</td>
            <td>${contato.email}</td>
            <td><button onclick="removerContato(${contato.id})">Remover</button></td>
        `;
        tbody.appendChild(row);
    });
}

export function salvarContato(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nome || !telefone || !email) {
        alert('Todos os campos são obrigatórios!');
        return;
    }

    const contato = new Contato(nome, telefone, email);
    agendaService.saveContato(contato);
    event.target.reset();
    renderTabela();
}

export function removerContato(id) {
    agendaService.deleteContato(id);
    renderTabela();
}
