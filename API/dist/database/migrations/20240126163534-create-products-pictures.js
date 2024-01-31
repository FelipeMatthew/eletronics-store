"use strict";// Object attributes and settings

// npx sequelize migration:create --name=products
// npx sequelize db:migrate
// npx sequelize db:migrate:undo - desfazer a ultima action

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('product-pictures', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'products',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE', // TUDO Q FIZER NO PAI IRA ALTERAR NO FILHO
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });

  },

  async down (queryInterface, Sequelize) {

      await queryInterface.dropTable('product-pictures');

  }
};
