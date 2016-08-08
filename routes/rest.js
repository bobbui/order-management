var express = require('express');
var _ = require('lodash');
var router = express.Router();
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/orders');
mongoose.connect('mongodb://orders:orders@ds029665.mlab.com:29665/orders');
mongoose.Promise = global.Promise;

var Order = mongoose.model('Order',
    {
        name: String,
        type: String,
        size: String,
        price: Number,
        quantity: Number,
        amount: Number,
        time: Date
    });
var Drink = mongoose.model('Drink',
    {
        type: String,
        name: String,
        size: String,
        price: Number
    });

router.get('/drink', function (req, res, next) {
    Drink.find(function (err, drinks) {
        if (err) {
            console.log(err);
            res.status(500).send({success: false, message: err});
        } else {
            res.send(drinks);
        }
    });
});

router.get('/order', function (req, res, next) {
    Order.find(function (err, orders) {
        if (err) {
            console.log(err);
            res.send({success: false, message: err});
        } else {
            res.send(orders);
        }
    });
});

router.put('/order', function (req, res, next) {
    var newOrder = new Order(req.body);
    newOrder.time = new Date();
    newOrder.save(function (err) {
        if (err) {
            console.log(err);
            res.status(500).send({success: false, message: err});
        } else {
            res.send({success: true});
        }
    });
});
module.exports = router;
