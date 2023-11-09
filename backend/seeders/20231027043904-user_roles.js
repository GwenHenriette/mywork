'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('user_roles', [
      { id: 1, uuid: uuidv4(), userID: 1, roleID: 1 }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('user_roles', null, {});
  }
};
