<h1 align="center">
  <br>
  <a href=""><img src="https://media.discordapp.net/attachments/966886692109819994/1198030505833152612/bcf55b4c-8311-45a0-8875-0e5c8c206124-removebg-preview.png?ex=65bd6bda&is=65aaf6da&hm=d6a7ae8e2aa508ca4e3f2536ad6a7956e25ba10a3fa00ad8b3874dbf8256fe92&=&format=webp&quality=lossless" width="200"></a>
  <br>
    ELETRONICS STORE
  <br>
</h1>

<h4 align="center">Projeto voltado para criação de um sistema envolvendo gerenciamento de produtos eletro eletronicos</h4>

<p align="center">
  <a href="#Como utilizar">Como utilizar</a> •
  <a href="#Tecnologias">Tecnologias</a> •
  <a href="#Como Contribuir">Como Contribuir</a> •
  <a href="#Colaboradores">Colaboradores</a> •
</p>


## **🦄** Como utilizar

Para subir o projeto no ar com SQLite, copie o arquivo `.env_example` para `.env`.  

Você também precisará adicionar uma secret key no arquivo `.env`:

```
TOKEN_SECRET='sua_secret_key_aqui'
```

Execute os comandos abaixo:

```
npm i
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
```

Neste ponto sua API deverá está rodando no endereço http://127.0.0.1:3000/.

Caso queira migrar para MySQL/MariaDB, edite as configurações de base de dados no arquivo `.env`, configure também o `src/config/database.js`.

Para SQLite as configurações são:

```js
require('dotenv').config();

module.exports = {
  dialect: 'sqlite',
  storage: './db.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
```

Para MySQL/MariaDB as configurações são:

```js
require('dotenv').config();

module.exports = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
```

Perceba que as configurações começando com `process.env.` vem do arquivo `.env`.

Os dados de usuário e senha dos arquivos de seed são:

- email = admin@email.com
- senha = 123456

Você pode obter o token JWT na rota `/tokens`, passando os dados JSON:

```json
{
	"email": "admin@email.com",
	"password": "123456"
}
```

Headers:

```
Content-Type	application/json; charset=utf-8
```

## ♟ Tecnologias

* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
* ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
* ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
* ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
* ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
* ![GIT](https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white)
* [![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)](https://www.microsoft.com/pt-br/windows/get-windows-10)
* ![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)

## 🖥 Como Contribuir
Agradecemos o seu interesse em contribuir para Tati Lima Sobrancelhas! Siga os passos abaixo para começar:

1. Faça um fork deste repositório.
2. Crie uma branch para a sua contribuição: git checkout -b sua-contribuicao.
3. Faça as modificações desejadas.
4. Faça commit das suas alterações: git commit -m 'Descrição concisa das modificações'.
5. Faça push para a branch: git push origin sua-contribuicao.
6. Abra um Pull Request, descrevendo suas modificações.

## 🤝 Colaboradores

Desenvolvedores do projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/FelipeMatthew">
        <img src="https://avatars.githubusercontent.com/u/102431464?v=4" width="100px;" alt="Foto do Felipe Matthew "/><br>
        <sub>
          <b>Felipe Matthew</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
