"use strict";
const express = require("express");
const cart = express.Router();

const cartItems = [
    { 
        id: 0,
        product: "Orange juice",
        price: "$3.06",
        quantity: 1,
    },
    { 
        id: 1,
        product: "Bread",
        price: "$1.99",
        quantity: 1,
    },
    { 
        id: 2,
        product: "Peanut Butter",
        price: "$3.99",
        quantity: 2,
    },
    { 
        id: 3,
        product: "Coffee",
        price: "$6.99",
        quantity: 1,
    },
    { 
        id: 4,
        product:"Cookies",
        price: "$2.00",
        quantity: 3,
    },
];

cart.get("/cart-items", (req , res) => {
    res.json(cartItems);
});

cart.post("/cart-items", (req , res) => {
    cartItems.push(req.body);
    res.json(cartItems);
});

cart.put("/cart-items/:id", (req, res) => {
    cartItems[req.params.id] = req.body;
    res.json(cartItems);
});

cart.delete("/cart-items/:id", (req,res) => {
    cartItems.splice(req.params.id, 1);
    res.json(cartItems);
});

module.exports = cart;