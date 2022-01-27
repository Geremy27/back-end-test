'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: { type: Sequelize.DataTypes.STRING(50) },
      last_name: { type: Sequelize.DataTypes.STRING(50) },
      birthday: { type: Sequelize.DataTypes.DATEONLY },
      password: { type: Sequelize.DataTypes.STRING(40) },
      gender_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'genders',
          key: 'gender_id',
        },
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
