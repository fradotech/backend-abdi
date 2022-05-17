'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('check_up_histories', {
      fields: ['patient_id'],
      type: 'foreign key',
      name: 'check_up_patient',
      references: {
        table: 'patients',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.addConstraint('check_up_histories', {
      fields: ['patient_id'],
      type: 'foreign key',
      name: 'check_up_patient',
      references: {
        table: 'patients',
        field: 'id'
      }
    })
  }
};
