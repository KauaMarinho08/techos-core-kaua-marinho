export class Usuario {
    constructor(id, nome, email) {
        if (this.constructor === Usuario) {
            throw new Error("Classe Abstrata 'Usuario' não pode ser instanciada.");
        }
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
