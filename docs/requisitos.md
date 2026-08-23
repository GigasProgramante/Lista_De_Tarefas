# Requisitos do Sistema - TaskFlow

## Requisitos Funcionais

- **RF01** - O sistema deve permitir que o usuário adicione uma nova tarefa, informando uma descrição.
- **RF02** - O sistema deve exibir uma lista com todas as tarefas cadastradas.
- **RF03** - O sistema deve permitir que o usuário marque uma tarefa como concluída.
- **RF04** - O sistema deve exibir uma mensagem informativa quando não houver tarefas cadastradas (ex: "Nenhuma tarefa cadastrada").

## Requisitos Não Funcionais

- **RNF01** - A aplicação deve ser desenvolvida utilizando HTML, CSS e JavaScript, sem uso de banco de dados.
- **RNF02** - A aplicação deve funcionar diretamente no navegador, sem necessidade de instalação.
- **RNF03** - A interface deve ser simples e intuitiva para o usuário.

## Regras de Negócio

- Uma tarefa não pode ser adicionada com descrição vazia.
- Tarefas concluídas devem ser visualmente diferenciadas das pendentes (ex: texto riscado).