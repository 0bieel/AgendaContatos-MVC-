import { Contato } from '../model/Contato.mjs';

export class AgendaService {
    constructor() {
        this.storageKey = 'contatos';
    }

    getContatos() {
        const contatosJson = localStorage.getItem(this.storageKey);
        return contatosJson ? JSON.parse(contatosJson) : [];
    }

    saveContato(contato) {
        const contatos = this.getContatos();
        contatos.push(contato);
        localStorage.setItem(this.storageKey, JSON.stringify(contatos));
    }

    deleteContato(id) {
        const contatos = this.getContatos();
        const filteredContatos = contatos.filter(contato => contato.id !== id);
        localStorage.setItem(this.storageKey, JSON.stringify(filteredContatos));
    }
}