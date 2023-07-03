# API de Filmes

Esta é uma API desenvolvida em Node.js com Express e TypeScript, utilizando o banco de dados PostgreSQL. Ela implementa a arquitetura REST e permite gerenciar informações sobre filmes.

## Requisitos

Certifique-se de ter os seguintes requisitos instalados em sua máquina:

- Node.js
- PostgreSQL

## Instalação

Siga as etapas abaixo para configurar o projeto:

1. Clone este repositório para o seu diretório local.
2. Navegue até o diretório do projeto.
3. Execute o comando `npm install` para instalar as dependências.

## Configuração do Banco de Dados

1. Certifique-se de ter o PostgreSQL instalado e em execução.
2. Crie um banco de dados no PostgreSQL para a aplicação.
3. No arquivo `.env`, defina as informações de conexão com o banco de dados. Por exemplo:

   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=nome_do_banco_de_dados
   ```
4. Crie o seguinte formato de tabela no seu banco de dados:

    ```
    CREATE TABLE movies(
  	id SERIAL PRIMARY KEY,
  	name TEXT NOT NULL UNIQUE,
  	plataform TEXT NOT NULL,
  	genre TEXT NOT NULL,
  	status BOOLEAN NOT NULL DEFAULT false
    )
    ```

## Executando a API

Após a conclusão das etapas de instalação e configuração do banco de dados, você pode iniciar o servidor da API. Execute o comando `npm run start` e a API estará disponível no endereço `http://localhost:5000`.

## Endpoints

A API possui os seguintes endpoints disponíveis:

- `GET /movies`: Retorna todos os filmes cadastrados.
- `POST /movies`: Cria um novo filme.
- `PUT /movies/:id`: Atualiza os detalhes de um filme específico.
- `DELETE /movies/:id`: Remove um filme específico.

## Estrutura da Tabela de Filmes

A tabela de filmes possui a seguinte estrutura:

- `name` (string): O nome do filme.
- `platform` (string): A plataforma em que o filme é exibido.
- `genre` (string): O gênero do filme.
- `status` (boolean): Indica se o filme foi assistido (`true`) ou não (`false`).

## Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT). Sinta-se livre para utilizá-lo conforme necessário.
