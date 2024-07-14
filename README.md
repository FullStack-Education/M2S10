# Atividades

Projeto gerado para a realização das atividades de aula utilizando [Angular CLI](https://github.com/angular/angular-cli) versão 18.0.5.

## Executando o projeto

Após clonado o projeto, realize a instalação das dependências utilizando o comando `npm install`.
Uma vez instaladas as dependências, já é possível subir um servidor local com a execução da aplicação através do comando `ng serve`.

## JSON Server

Esta aplicação também utiliza o JSON Server para mock de consumo de APIs.
Para execução do servidor, primeiramente é necessário instalar a dependência através do comando `npm install json-server` ou `npm install -g json-server`.
Depois, executar o comando json-server passando o arquivo de configuração dos endpoints. Para esse projeto usamos `json-server ./src/db/db.json`
