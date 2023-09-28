# Izabucks

Este é um projeto que faz parte da entrega do MVP 

Izabucks : Tem como objetivo mostrar o cardapio de bebidas do restaurante podendo incluir adicionar e visualizar .
Projeto Front Single page application (SPA) consumindo o dado de uma API via arquivo JSON.Framework angular version 16.1.4. 


## Instalando dependências
Executar o comando `npm install` ou `yarn install`


## Executar o Projeto 
Executar o comando `ng serve` ou `npm start`. Após o projeto ser compliado em seu navegador, digite a url  `http://localhost:4200/`


## Como executar

Para executar o projeto é necessário realizar o download e abrir a página index.html em qualquer navegador.

---
## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile e o requirements.txt no terminal.
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t frontcrises . (alterar o nome 
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
$ docker run -it -p 4200:80 frontcrises
```

Uma vez executando, para acessar a API, basta abrir o [http://localhost:4200/](http://localhost:4200/) no navegador.
