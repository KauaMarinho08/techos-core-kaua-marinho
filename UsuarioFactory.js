import { Cliente, Tecnico } from './models.js';

export class UsuarioFactory {
    static criarUsuario(tipo, id, nome, email, dadoExtra) {
        tipo = tipo.toUpperCase();

        if (tipo === 'CLIENTE') {
            console.log(`[FACTORY] Criando Usuário Tipo: CLIENTE... -> Objeto 'Cliente' criado (ID: ${id}, Nome: ${nome}).`);
            return new Cliente(id, nome, email, dadoExtra);
        } 
        else if (tipo === 'TECNICO') {
            console.log(`[FACTORY] Criando Usuário Tipo: TECNICO... -> Objeto 'Tecnico' criado (ID: ${id}, Nome: ${nome}).`);
            return new Tecnico(id, nome, email, dadoExtra);
        } 
        else {
            throw new Error("Tipo de usuário não suportado.");
        }
    }
}
