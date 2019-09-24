const express = require('express');
const Coins = express.Router();
const User = require('../models/User');
const Sequelize = require('sequelize');

Coins.get('/getAllCoins/:email', (req, res) => {  // 로그인
    let { email } = req.params;
    User.findOne(
        {
        attributes :["coin"],
        where  : {
            email
        }
    })
    .then(results => {
        res.send(results);
    })
    .catch(err => {
        console.error(err);
    })
});
Coins.post('/chargeCoins', (req, res) => {  // 로그인
    let { email, chargeCoin } = req.body;
    User.update(
        {
         coin: Sequelize.literal("coin +" + chargeCoin)
        }
        ,{
            where : {
                email
            }
        }
    )
    .then(results => {
        if(results)
            res.send('충전 완료');
    })
    .catch(err => {
        console.error(err);
    })
});
Coins.post('/useCoins', (req, res) => {  // 로그인
    let { email, useCoins } = req.body;
    User.update(
        {
            coin: Sequelize.literal("coin -" + useCoins)
        },
        {
        where : {
            email
        }
    })
    .then(results => {
        if(results)
            res.send('사용 완료');
    })
    .catch(err => {
        console.error(err);
    })
});


module.exports = Coins;