"use strict";require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    // Informa quando foi criado e quando foi atualizado o registro
    timestamps: true,
    underscored: true,
    underscoredAll: true, // alunoTeste = aluno_teste
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {},
  timezone: 'America/Sao_Paulo',
};
