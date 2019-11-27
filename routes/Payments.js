const express = require('express');
const Payments = express.Router();
const paymentdb = require('../models/payment');
const Sequelize = require('sequelize');
const User = require('../models/User');
const userDonaList = require('../models/userDonaList');
const Prolist = require('../models/prolist');


//프로그램 생성할 때 값 초기화 하기 
Payments.post('/createBuy', (req, res) => {  // 장바구니 구입 
    let {proNum} = req.body; // 프로그램no 받는다.
    var product1, product2, product3=0;
    var totalpay=0;
    const program = {
        proNum,
        product1,
        product2,
        product3,
        totalpay
    }
    paymentdb.create(
        program
    )
    .then(results => {
        res.send(results);
    })
    .catch(err => {
        console.error(err);
    })
});

Payments.get('/getCategory/:proNum', (req, res) => { // 캠페인no을 가지고 그 프로그램의 category 을 가져옴.
    const { proNum } = req.params;

    paymentdb.findOne(
        {
        attributes :["product1","product2","product3"],
        where  : {
            proNum
        }
    })
    .then(results => {
        res.send(results);
    })
    .catch(err => {
        console.error(err);
    })
})

Payments.post('/buyProductInfo', (req, res) => { // 구매하면 증가하게 
    const { proNum, category1, category2, category3 ,nowpay } = req.body;
    paymentdb.update(
        {
         product1: Sequelize.literal("product1 +" + category1),
         product2: Sequelize.literal("product2 +" + category2),
         product3: Sequelize.literal("product3 +" + category3),
         totalpay: Sequelize.literal("toalpay +" + nowpay)
        }
        ,{
            where : {
                proNum
            }
        }
    )
    .then(results => {
        if(results)
            res.send('구매 완료');
    })
    .catch(err => {
        console.error(err);
    })
})

module.exports = Payments;