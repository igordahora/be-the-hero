# Comandos

```bash
# criar o package.json
npm init -y

# Adicionar o express
npm install express

# Executar
node index.js

# Adicionar o nodemon como devDependencies [ -D ]
# O nodemon vai auxiliar no desenvolvimento recarregando o script em caso de alteração, não precisando ficar parando e reniciando o servidor node
npm install nodemon -D

# Configurar o nodemon no package.json
"scripts": {
    "start": "nodemon index.js"
},

# Adicionar Query Build (http://knexjs.org/)
npm install knex

# Instalar conexão com banco de dados
npm install sqlite3

# configurando nossa conexão de base dados
npx knex init
Created ./knexfile.js

# crianto uma migrate
npx knex migrate:make create_ongs
npx knex migrate:make create_incidents

# Rodar a migrate
npx knex migrate:latest

# Modulo de segurança para determinar quem pode acessar a aplicação
npm install cors
```

# Metodos HTTP

> `GET:` Buscar uma informação do back-end

> `POST:` Criar uma informação do back-end

> `PUT:` Alterar uma informação do back-end

> `DELETE:` Deletar uma informação do back-end

# Tipos de parâmetros

> `Query Params:` Parâmetros nomeados que são enviados na rota após "?" (filtro, paginação)

```js
/* Ex.: Rota passando parâmetros nomeados */
/users?name=igor
/* pegando os parametros nomeados */
const query = request.query;
console.log(query);
```

> `Route Params:` Parâmetros ultilizados para identificar recursos

```js
/* Ex.: Rota passando parametro para o recurso */
/users/:id
/* Recuperando o valor passado por parametro */
const params = request.params;
console.log(params);
```

> `Request Body:` Corpo da requisição, ultilizado para criar ou alterar recursos

```json
{
    name: "Igor da Hora",
    idade: 36
}
```

> Criar pasta src
> mover index.js para dentro
> trocar caminho do `start` do package.json para o caminho `src/index.js`


# Entidades
 - ONG
 - Caso (incident)

# Funcionalidades
 - Login de ONG
 - Logout de ONG
 - Cadastro de ONG
 - Cadastrar novos casos
 - Deletar casos
 - Listar casos especificos de uma ONG
 - Lista todos os casos
 - Entrar em contato com a ONG

# Validação
https://github.com/arb/celebrate

```bash
npm i celebrate
```

# Teste
https://jestjs.io/

```bash
npm install --save-dev jest
npx jest --init
```

# Pacote para criar variaveis de ambiente
```bash
npm install cross-env
```

# API para Teste
```bash
npm install supertest --save-dev
```