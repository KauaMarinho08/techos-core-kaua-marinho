import { UsuarioFactory } from './UsuarioFactory.js';
import { GerenciadorOS } from './GerenciadorOS.js';

// 1. Inicializa o Singleton
const gerenciador = new GerenciadorOS();

// 2. Usa a Factory para criar os usuários dinamicamente
const clienteAna = UsuarioFactory.criarUsuario('CLIENTE', 101, 'Ana', 'ana@email.com', '11999999999');
const tecnicoCarlos = UsuarioFactory.criarUsuario('TECNICO', 202, 'Carlos', 'carlos@email.com', 'Hardware');

// 3. Registra a Ordem de Serviço
gerenciador.registrarOS(1, clienteAna, tecnicoCarlos, "Troca de Tela");

// 4. Exibe a lista
gerenciador.listarOS();
