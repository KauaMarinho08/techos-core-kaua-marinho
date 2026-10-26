export class GerenciadorOS {
    constructor() {
        if (GerenciadorOS.instancia) {
            return GerenciadorOS.instancia;
        }
        this.ordensServico = [];
        console.log("[SINGLETON] GerenciadorOS re-inicializado na View.");
        GerenciadorOS.instancia = this;
    }

    registrarOS(id, cliente, tecnico, descricao) {
        const novaOS = {
            id,
            cliente: cliente.nome,
            tecnico: tecnico.nome,
            status: "ABERTA",
            descricao
        };
        this.ordensServico.push(novaOS);
        return novaOS;
    }

    listarOS() {
        return this.ordensServico;
    }
}
