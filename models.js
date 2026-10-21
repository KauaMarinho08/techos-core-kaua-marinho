// Classe Abstrata (Não deve ser instanciada diretamente)
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

export class Cliente extends Usuario {
    constructor(id, nome, email, telefone) {
        super(id, nome, email);
        this.telefone = telefone;
    }
}

export class Tecnico extends Usuario {
    constructor(id, nome, email, especialidade) {
        super(id, nome, email);
        this.especialidade = especialidade;
    }
}
