"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }'use strict';
// npx sequelize seed:generate --name create-products
// npx sequelize db:seed:all

var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

const generateHash = async (password) => {
  return await _bcryptjs2.default.hash(password, 8);
};

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password_hash: await generateHash('123456'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Jane Smith',
        email: 'janesmith@gmail.com',
        password_hash: await generateHash('password123'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Bob Johnson',
        email: 'bobjohnson@gmail.com',
        password_hash: await generateHash('qwerty'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Alice Williams',
        email: 'alicewilliams@gmail.com',
        password_hash: await generateHash('securepass'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Charlie Brown',
        email: 'charliebrown@gmail.com',
        password_hash: await generateHash('brown123'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Eva Davis',
        email: 'evadavis@gmail.com',
        password_hash: await generateHash('evapassword'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Frank White',
        email: 'frankwhite@gmail.com',
        password_hash: await generateHash('frankpass'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Grace Turner',
        email: 'graceturner@gmail.com',
        password_hash: await generateHash('grace123'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Henry Miller',
        email: 'henrymiller@gmail.com',
        password_hash: await generateHash('millerpass'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Ivy Lee',
        email: 'ivylee@gmail.com',
        password_hash: await generateHash('ivypassword'),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down () {}
};
