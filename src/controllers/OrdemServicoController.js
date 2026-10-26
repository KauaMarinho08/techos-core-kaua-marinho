import { UsuarioFactory } from '../models/UsuarioFactory.js';
import { GerenciadorOS } from '../models/GerenciadorOS.js';

export class OrdemServicoController {
    constructor(view) {
        this.view = view;
        this.gerenciador = new GerenciadorOS();
        this.contadorId = 1;
    }

    inicializar() {
        this.view.renderizarTabela(this.gerenciador.listarOS());
        this.view.vincularFormulario((dados) => this.handleNovaOS(dados));
    }

    handleNovaOS({ nomeCliente, emailCliente, telefoneCliente, nomeTecnico, especialidadeTecnico, descricao }) {
        console.log("[CONTROLLER] Evento submit capturado com sucesso.");

        const cliente = UsuarioFactory.criarUsuario(
            'CLIENTE', 
            100 + this.contadorId, 
            nomeCliente, 
            emailCliente, 
            telefoneCliente
        );

        const tecnico = UsuarioFactory.criarUsuario(
            'TECNICO', 
            200 + this.contadorId, 
            nomeTecnico, 
            'tecnico@techos.com', 
            especialidadeTecnico
        );

        const novaOS = this.gerenciador.registrarOS(this.contadorId, cliente, tecnico, descricao);
        this.contadorId++;

        this.view.renderizarTabela(this.gerenciador.listarOS());

        // Feedback via Toastify
        if (window.Toastify) {
            console.log(`[BIBLIOTECA] Toastify exibido: "Ordem de Serviço #${novaOS.id} criada com sucesso!".`);
            window.Toastify({
                text: `Ordem de Serviço #${novaOS.id} criada com sucesso!`,
                duration: 3000,
                gravity: "top",
                position: "right",
                style: { background: "linear-gradient(to right, #00b09b, #96c93d)" }
            }).showToast();
        }
    }
}
