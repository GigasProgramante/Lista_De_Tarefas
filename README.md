# Nome dos alunos:
- Guilherme Vojciechovski
- Luis Ronei Gonçalves de Luz
- Henrique Jakubiak

# Lista de Tarefas

Aplicação web simples para organizar tarefas do dia a dia. O usuário pode adicionar novas tarefas a uma lista e marcá-las como concluídas.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Live-Server

## Como executar

1. Abra este projeto no Visual Studio Code.
2. Instale a extensão **Live Server**, caso ela ainda não esteja instalada.
3. Abra o arquivo `src/index.html`.
4. Clique com o botão direito no arquivo e selecione **Open with Live Server**.
5. A aplicação será aberta automaticamente no navegador.

Também é possível iniciar o projeto pelo botão **Go Live** na barra de status do Visual Studio Code, com `src/index.html` aberto.

## Funcionalidades

- Adicionar uma tarefa à lista.
- Exibir as tarefas cadastradas.
- Marcar uma tarefa como concluída.
- Diferenciar visualmente tarefas pendentes e concluídas.

## Estrutura do projeto

```text
Lista_De_Tarefas/
├── assets/
│   └── img/
├── docs/
│   └── requisitos.md
├── src/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
└── README.md
```

## Uso

Digite uma tarefa no campo de texto e use o botão de adicionar. Quando a tarefa for realizada, selecione o controle correspondente para marcá-la como concluída.

## Descrição das tarefas de cada aluno

- Guilherme: criei o repositório, organizei os diretórios, criei os arquivos README.md e o .gitignore, auxiliei os demais integrantes na utilização do git, validei todas as PRs.

- Luís Ronei Gonçalves da Luz — Lógica da aplicação (JavaScript)

Responsável pelo desenvolvimento da lógica funcional da aplicação em JavaScript e pela documentação de requisitos do sistema. Principais atividades:

- Criação do documento `docs/requisitos.md`, com os requisitos funcionais e não funcionais do projeto.
- Implementação da função de (adicionar tarefas), capturando o valor digitado pelo usuário e armazenando em uma lista de tarefas.
- Implementação da função de (exibir a lista de tarefas)na tela, renderizando dinamicamente cada item cadastrado.
- Implementação da função de (marcar tarefas como concluídas), com atualização visual (classe `completed`) ao clicar sobre o item.
- Implementação da (mensagem de lista vazia), exibida automaticamente quando não há tarefas cadastradas.
- Integração do JavaScript com o HTML desenvolvido pelo aluno Henrique Mengarda Jakubiak responsável pela interface, alinhando os IDs dos elementos para garantir o funcionamento correto entre as duas partes.
- Participação no desafio de conflito de merge, com edição da seção de tecnologias utilizadas no `README.md`, gerando e ajudando a resolver o conflito junto com o aluno Guilherme Vojciechocski
- Revisão de Pull Request dos outros alunos.

- Henrique: Desenvolvimento da iterface do projeto, realizando a implementação do HTML e do CSS, envio dos arquivos para o GitHub e criando as respectivas Pull Requests.