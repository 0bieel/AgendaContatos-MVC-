export class Contato {
    constructor(nome, telefone, email) {
        this.id = Date.now(); // ID único
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}