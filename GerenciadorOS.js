export class GerenciadorOS {
    constructor() {
        // Verifica se a instância já existe
        if (GerenciadorOS.instancia) {
            return GerenciadorOS.instancia;
        }

        this.ordensServico = [];
        console.log("[SINGLETON] Instância única do GerenciadorOS inicializada.");

        // Salva a instância atual
        GerenciadorOS.instancia = this;
    }

    registrarOS(id, cliente, tecnico, descricao) {
        const novaOS = {
            id,
            cliente: cliente.nome,
            tecnico: tecnico.nome,
            status: "ABERTA", // Conforme critério de aceitação definido na modelagem
            descricao
        };
        this.ordensServico.push(novaOS);
        console.log(`[SISTEMA] Ordem de Serviço #${id} registrada com sucesso!`);
    }

    listarOS() {
        console.log("[SISTEMA] Lista de OS ativas:");
        console.log(this.ordensServico);
    }
}
