
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Descreva aqui a metodologia de trabalho do grupo para atacar o problema. Definições sobre os ambiente de trabalho utilizados pela  equipe para desenvolver o projeto. Abrange a relação de ambientes utilizados, a estrutura para gestão do código fonte, além da definição do processo e ferramenta através dos quais a equipe se organiza (Gestão de Times).

## Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito deverá ser apresentada em uma tabela que especifica que detalha Ambiente, Plataforma e Link de Acesso. 

*Repositório de código Fonte |GitHub| https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-pmv-ads-2023-2-e3-proj-mov-t3-grupo5

*Documentos do Projeto | Google Drive | 

*Projeto de Interface e Wireframes | 

*Gerenciamento do Projeto |GitHub| https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/479/views/3

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O modelo Gitflow é um fluxo de trabalho popular que utiliza várias branches para gerenciar o desenvolvimento de software com Git. Este modelo ajuda a manter uma estrutura organizada para o desenvolvimento de software, garantindo que todas as alterações de código sejam feitas nas branches corretas e que as mesclagens sejam feitas de forma adequada e controlada.   

O projeto segue a seguinte convenção para o nome de branches:


- `master`: é a branch principal que contém o código do produto em produção. Todas alterações feitas nessa branch são destinadas à próxima versão de lançamento.
- `develop`: é a branch principal com o código de desenvolvimento mais recente. As alterações de diferentes desenvolvedores são mescladas nesta branch à medida que são concluídas. Esta branch é utilizada como base para as próximas versões do produto.
- `feature`: são as branches de recursos utilizadas para desenvolver novas funcionalidades ou melhorias no código, são criadas a partir da develop branch e juntadas a ela quando o trabalho é finalizado.    
- `release`: são as branches usadas para preparar uma nova versão do produto para lançamento. Essas branches são criadas a partir da develop branch e são usadas para fazer ajustes finais antes do lançamento, como correções de bugs, atualizações de documentação, etc. Após o término dos ajustes, a branch é mesclada em master e develop.
- `hotfix`: são as branches usadas para corrigir bugs críticos no código que está em produção. Essas branches são criadas a partir da master branch e, uma vez concluídas, são mescladas novamente em master e develop.


Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

## Gerenciamento de Projeto

### Divisão de Papéis

A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. A equipe está organizada da seguinte maneira:

- **Scrum Master**: Mateus Curcino de Lima;
- **Gerente de Projeto**: Hebert Eustáquio de Almeida Sandinha
- **Designer de UI/UX**: Lucas Reis Alves;
- **Equipe de Desenvolvimento**: Maria Luiza Gonçalves de Sousa e Rafaella Belisário Avidago;
- **QA Testers**: Elves Teixeira Dias e Henrique de Brito Leite.

### Processo

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o GitHub Projects estruturado com as seguintes listas: 

**Product Backlog**: recebe as tarefas a serem trabalhadas. Todas as atividades identificadas no decorrer do projeto devem ser incorporadas a esta lista.  
**To Do**: Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando.   
**In Progress**: Quando uma tarefa tiver sido iniciada, ela é movida para lá.   
**Done**: Nesta lista são colocadas as tarefas que já foram finalizadas.

O quadro com as tarefas do grupo no Projects GitHub pode ser consultado através da URL https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/479/views/3 e é apresentado, no estado atual, na figura abaixo.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-pmv-ads-2023-2-e3-proj-mov-t3-grupo5/assets/103864597/99e90380-99c6-4dd7-bf35-39e8503f63fb)

### Ferramentas

As ferramentas empregadas no projeto são:

- **Editor de código**:
- **Ferramentas de comunicação**: Whatsapp e Teams
- **Ferramentas de desenho de tela** (_wireframing_)
- **Ferramentas para Diagrama**: 

O editor de código foi escolhido por possuir uma integração com o sistema de versão e em função de ser um programa de fácil acesso a todos do grupo.

As ferramentas de comunicação utilizadas foram as que os integrantes do grupo já estavam acostumados, por serem mais práticas e usuais.

Por fim, para criar diagramas utilizamos essas ferramentas por melhor captar as necessidades da nossa solução.
