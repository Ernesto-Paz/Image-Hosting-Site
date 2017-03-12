'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
      
      queryInterface.addColumn(
  "images",
  'thumbnailKey',
  {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Old"
  }
)
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.removeColumn("images", "thumbnailKey");
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
