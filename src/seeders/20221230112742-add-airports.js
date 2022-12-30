'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',s
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Airports', [{
                name: "Sardar Vallabhbhai Patel International Airport",
                cityId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Rajiv Gandhi International Airport",
                cityId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: "Rajiv Gandhi International Airport",
                cityId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};