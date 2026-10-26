import { Cliente } from './Cliente.js';
import { Tecnico } from './Tecnico.js';

export class UsuarioFactory {
    static criarUsuario(tipo, id, nome, email, dadoExtra) {
        const t = tipo.toUpperCase();
        if (t === 'CLIENTE') {
            console.log(`[FACTORY] Criando 'Cliente' via formulário UI -> ID: ${id}.`);
            return new Cliente(id, nome, email, dadoExtra);
        } else if (t === 'TECNICO') {
            console.log(`[FACTORY] Criando 'Tecnico' via formulário UI -> ID: ${id}.`);
            return new Tecnico(id, nome, email, dadoExtra);
        }
        throw new Error("Tipo de usuário não suportado.");
    }
}
