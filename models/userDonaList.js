const Sequelize = require('sequelize');
const db = require('../database/db');
const userDonaList = db.sequelize.define(
    'userDonaList',
    {
        email : {
            type : Sequelize.STRING,
            primaryKey : true,
        },
        PASSWORD: {
            type: Sequelize.STRING,
        },
        date : {
            type: Sequelize.DATE,
            defaultValue : Sequelize.NOW
        },
        donaCoin : {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },

    },
    {
        timestamps: false
    }
)

module.exports = userDonaList;