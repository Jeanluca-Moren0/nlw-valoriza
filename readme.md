<a href="https://nextlevelweek.com/inscricao/6">
    <img src="https://nextlevelweek.com/og/nlw-edition.png" >
</a>

<hr/>

<h1 align="center">NLW Valoriza</h1>

<p align="center">
  <a href="https://github.com/Jeanluca-Moren0">
  <img alt="Made by Jeanluca Moreno" src="https://img.shields.io/badge/-Github-03a9fc?style=for-the-badge&logo=Github&logoColor=white&link=https://github.com/Jeanluca-Moren0" />
  </a>
   <a href="https://www.linkedin.com/in/jeanlucam/">
      <img alt="Jeanluca Moreno" src="https://img.shields.io/badge/-Jeanluca%20Moreno-03a9fc?style=for-the-badge&logo=Linkedin&logoColor=white" />
   </a>
  <br />
</p>

<hr/>
<br/>



<h3 align="left">Desenvolvido durante o evento <b>NLW together</b> seguindo a trilha de:</h3>
<br/>
<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" width="350px"> 
</div>

<hr/>
<br/>

<h1 align="left">Aula 1 🚀</h1>


## O que é o Node?

Sua primeira versão foi lançada em 2009, por Ryan Dohl. Vendo que no javascript podemos criar funções sem que haja bloqueio e juntando com o V8 do Google para a criação do Node.

No Node há um loop de evento que é quem receberá a requisição, e ele é single thread que significa que ele é um bloco de processamento das nossas requisições. Porém nossa requisição não é processada no loop de evento, ele irá delegar a requisição para uma thread disponível que será responsável por processar essa requisição.

O Node também tem o conceito de Non-blocking IO que significa que uma requisição pode ser assíncrona, ou seja, não precisa esperar que outra termine para executar as demais.

## O que é uma API?

Com as APIs o Cliente faz uma requisição pelas rotas, e o servidor retornará uma resposta. Sendo essa resposta:

- Regra de Negócio;
- Acesso ao BD;
- Autenticação;
- Dados Críticos.

Dentro da nossa API nós temos os recursos, que são as rotas que os clientes fazem as requisições.

## O que é Typescript?

É uma ferramenta que possibilita a tipagem de objetos. É basicamente criar uma identidade para aquilo que estamos recebendo.

Para tipar uma variável podemos usar: 

NomeDaVariavel: Tipo. Exemplo: Const Inteiro: integer.

<h1 align="left">Aula 2 🚀</h1>

## Tipos de parâmetros:

### Route Params:

Parâmetros que fazem parte da nossa rota. Exemplo: /usuários/1. Um parâmetro divido por barra na própria rota. Buscas por id, alteração de informações.

### Query Params:

Parâmetros que fazem parte de uma query. Uma filtragem, por exemplo: /usuários?nome=jean. Para adicionar mais parâmertos você adiciona "&".

### Body Params:

Parâmetros que vem no corpo da nossa requisição. Por exemplo: um json passando informações para um post, put ou patch.

## O que são Migrations?

Migrations é um controle que temos de versionamento de tabelas dentro da nossa aplicação.

## O que são Entities?

Entidades são uma referência para tabelas.

## O que é um constructor?

Constructor é um método especial usado para criar e inicializar um objeto criado a partir de uma classe.

## O que é um Repositório?

Repositório é toda camada que faz a comunicação entre a entidade e o banco de dados.

## Regras do projeto:

#### Cadastro de usuário;
- [x]  Não é permitido cadastrar mais de um user com o mesmo e-mail;
- [x]  Não é permitido cadastrar user sem e-mail;
#### Cadastro de TAG;
- [ ]  Não é permitido cadastrar mais de uma tag com o mesmo nome;
- [ ]  Não é permitido cadastrar tag sem nome;
- [ ]  Não é permitido o cadastro por usuários que não sejam admin;
#### Cadastro de elogios;
- [ ]  Não é permitido um usuário cadastrar um elogio para si;
- [ ]  Não é permitido cadastrar elogios para usuários inválidos;
- [ ]  O usuário precisa estar autenticado na aplicação;

