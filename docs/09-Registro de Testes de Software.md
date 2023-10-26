# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Para cada caso de teste definido no Plano de Testes de Software, realize o registro das evidências dos testes feitos na aplicação pela equipe, que comprovem que o critério de êxito foi alcançado (ou não!!!). Para isso, utilize uma ferramenta de captura de tela que mostre cada um dos casos de teste definidos (obs.: cada caso de teste deverá possuir um vídeo do tipo _screencast_ para caracterizar uma evidência do referido caso).

# Avaliação 

| Caso de teste 01     |  CT 01 - Cadastrar Novos Usuários                                                                   | 
| ------- | ------------------------------------------------------------------------------------------------------------ | 
| Objetivo do teste | Verificar se a tela de cadastro de usuários do sistema permite o cadastro correto de novos usuários e se as informações são armazenadas e exibidas corretamente. | 
| Escopo | Testar a funcionalidade da tela de cadastro de usuários para diferentes cenários. |

<br>


| Teste 01     |  Cadastro bem-sucedido do usuário                                                                  | 
| ------- | ------------------------------------------------------------------------------------------------------------ | 
| Descrição | Tentativa de cadastro com as credenciais corretas de um usuário. | 
| Ações esperadas | 1- Acessar a tela de cadastro de usuários. 2- Digitar o nome de usuário, email e senha. 3- Clicar no botão "Criar e acessar". 4- Verificar se o usuário é redirecionado para a página inicial do aplicativo. |
| Resultado | O usuário é cadastrado e direcionado para a página inicial do aplicativo. |
| Vídeo | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-pmv-ads-2023-2-e3-proj-mov-t3-grupo5/assets/115122394/3b50e48a-fca3-4485-87eb-592f6fdde568|

<br>

| Teste 02     |  Tentativa de cadastro de usuário já cadastrado                                                                  | 
| ------- | ------------------------------------------------------------------------------------------------------------ | 
| Descrição |  Tentativa de cadastro de um usuário já cadastrado. | 
| Ações esperadas | 1- Acessar a tela de cadastro de usuários. 2- Preencher as informações do usuário. 3- Clicar no botão "Criar e acessar". 4- Verificar se uma mensagem de erro é exibida indicando o email informado já está em uso. |
| Resultado | Uma mensagem de erro é exibida: "Este e-mail já está em uso". |
| Vídeo | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-pmv-ads-2023-2-e3-proj-mov-t3-grupo5/assets/115122394/0dd38c87-8618-4020-ad75-62f8edbdcab7 |

<br>

| Teste 03     |  Cadastro de usuário com informações faltantes                                                    | 
| ------- | ------------------------------------------------------------------------------------------------------------ | 
| Descrição |  Tentativa de cadastro de um novo usuário sem fornecer informações obrigatórias. | 
| Ações esperadas | 1- Acessar a tela de cadastro de usuários. 2- Deixar em branco um ou mais campos obrigatórios do novo usuário. 3- Clicar no botão "Criar e acessar". 4- Verificar se uma mensagem de erro é exibida indicando que as informações obrigatórias do usuário não foram fornecidas. |
| Resultado | Uma mensagem de erro é exibida indicando que as informações obrigatórias do usuário não foram fornecidas. |
| Telas | ![WhatsApp Image 2023-10-25 at 21 02 18](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-pmv-ads-2023-2-e3-proj-mov-t3-grupo5/assets/115122394/06d7026a-218e-4e23-b758-84f6238825f2) |

<br>

| Caso de teste 02     |  CT 02 - Efetuar Login                                                                   | 
| ------- | ------------------------------------------------------------------------------------------------------------ | 
| Objetivo do teste | Verificar se a tela de login do aplicativo permite que usuários autorizados acessem o sistema.| 
| Escopo | Testar a funcionalidade da tela de login para usuários válidos e inválidos. |

<br>

| Teste 01     |  Autenticação bem-sucedida do usuário válido                                                                  | 
| ------- | ------------------------------------------------------------------------------------------------------------ | 
| Descrição | Tentativa de login com as credenciais corretas de um usuário cadastrado. | 
| Ações esperadas | 1- Acessar a tela de login. 2- Digitar o e-mail e senha corretos. 3- Clicar no botão "Acessar". 4- Verificar se o usuário é redirecionado para a página inicial do aplicativo. |
| Resultado | O usuário é autenticado e redirecionado para a página inicial do aplicativo. |
| Vídeo | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-pmv-ads-2023-2-e3-proj-mov-t3-grupo5/assets/115122394/fba28563-de51-47bf-9534-5446d495d38d|

<br>

| Teste 02     |  Autenticação mal-sucedida do usuário inválido                                                                  | 
| ------- | ------------------------------------------------------------------------------------------------------------ | 
| Descrição | Tentativa de login com as credenciais inválidas. | 
| Ações esperadas | 1- Acessar a tela de login. 2- Digitar um e-mail e/ou uma senha inválida. 3- Clicar no botão "Acessar". 4- Verificar se uma mensagem de erro é exibida indicando que as credenciais são inválidas. |
| Resultado | Uma mensagem de erro é exibida: "E-mail e/ou senha incorreta". |
| Tela | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-pmv-ads-2023-2-e3-proj-mov-t3-grupo5/assets/115122394/11dfa18d-8ea5-4a74-bfce-71565eca7e15 |

<br>

