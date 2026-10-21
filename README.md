# techos-core-kaua-marinho
# 📄 Documentação de Requisitos e Modelagem (TechOS Core)

## 1. User Stories (Padrão INVEST)
**US01:** "Como técnico, quero abrir uma Ordem de Serviço para registrar um conserto."
* **Critério de Aceitação 01:** O sistema deve validar se o ID do cliente existe.
* **Critério de Aceitação 02:** O status inicial de qualquer nova OS deve ser obrigatoriamente definida como `ABERTA`.

**US02:** "Como cliente, quero visualizar o status do meu equipamento."
* **Critério de Aceitação 01:** O sistema deve permitir a busca de status pelo ID da Ordem de Serviço.
* **Critério de Aceitação 02:** O tempo de carregamento do status deve ser imediato.

## 2. Requisitos Não-Funcionais (RNF)
* **RNF01 (Segurança):** O sistema deve aplicar sanitização de inputs no cadastro para prevenir ataques XSS, seguindo as diretrizes da OWASP.
* **RNF02 (Desempenho):** O tempo de resposta na criação e processamento de chamados deve ser inferior a 2 segundos.

## 3. Diagrama de Classes (POO)

```mermaid
classDiagram
    class Usuario {
        <<Abstract>>
        -id: int
        -nome: string
        -email: string
        +getId() int
        +getNome() string
        +getEmail() string
    }
    
    class Cliente {
        -telefone: string
    }
    
    class Tecnico {
        -especialidade: string
    }
    
    class OrdemServico {
        -id: int
        -cliente: Cliente
        -status: string
    }

    Usuario <|-- Cliente : Herança
    Usuario <|-- Tecnico : Herança
    Cliente <-- OrdemServico : Associação
