"use strict";const bcrypt = require('bcryptjs');

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('users', [{
            nome: 'Giovanni',
            email: 'giovanni1@gmail.com',
            password_hash: await bcrypt.hash('123456', 8),
            created_at: new Date(),
            updated_at: new Date(),
        },
        {
            nome: 'Giovanni2',
            email: 'giovanni2@gmail.com',
            password_hash: await bcrypt.hash('123456', 8),
            created_at: new Date(),
            updated_at: new Date(),
        },
        {
            nome: 'Giovanni3',
            email: 'giovanni3@gmail.com',
            password_hash: await bcrypt.hash('123456', 8),
            created_at: new Date(),
            updated_at: new Date(),
        },
        {
            nome: 'Giovanni4',
            email: 'giovanni4@gmail.com',
            password_hash: await bcrypt.hash('123456', 8),
            created_at: new Date(),
            updated_at: new Date(),
        },],
        {},
        );
    },

    async down () {

    }
};
