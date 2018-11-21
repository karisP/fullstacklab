"use strict";
const express = require("express");
const cart = express.Router();
const pool = require("./connection.js");


cart.get("/cart-items", (req, res) => {
    pool.query("SELECT * FROM shopping_cart order by id").then((result) => {
        res.json(result.rows);

    });
});

cart.put("/cart-items/:id", (req, res) => {
    pool.query("UPDATE shopping_cart SET product=$1::text, price=$2::int, quantity=$3::int WHERE id=$4::int",
        [req.body.product, req.body.price, req.body.quantity, req.params.id]).then(() => {
            pool.query("SELECT * FROM shopping_cart order by id").then((result) => {
                res.json(result.rows);
            });
        });
});

cart.delete("/cart-items/:id", (req,res) => {
    pool.query("DELETE FROM shopping_cart WHERE id=$1::int", [req.params.id])
    .then(() => {
        pool.query("SELECT * FROM shopping_cart order by id").then((result) => {
            res.json(result.rows);
        });
    });
});

cart.post("/cart-items", (req, res)=>{
    console.log(typeof req.body.price);
    console.log(typeof req.body.quantity);
  });

// cart.post("/cart-items", (req, res)=>{
//     pool.query("INSERT INTO shopping_cart(product,price,quantity) VALUES($1::text, $2::int, $3::int)",
//     [req.body.product, req.body.price, req.body.quantity]).then(() => {
//         pool.query("SELECT * FROM shopping_cart order by id").then((result) =>{
//             res.json(result.rows);
//         });
//     });
// });







// const cartItems = [
//     { 
//         id: 0,
//         product: "Orange juice",
//         price: "$3.06",
//         quantity: 1,
//     },
//     { 
//         id: 1,
//         product: "Bread",
//         price: "$1.99",
//         quantity: 1,
//     },
//     { 
//         id: 2,
//         product: "Peanut Butter",
//         price: "$3.99",
//         quantity: 2,
//     },
//     { 
//         id: 3,
//         product: "Coffee",
//         price: "$6.99",
//         quantity: 1,
//     },
//     { 
//         id: 4,
//         product:"Cookies",
//         price: "$2.00",
//         quantity: 3,
//     },
// ];

// cart.get("/cart-items", (req , res) => {
//     res.json(cartItems);
// });

// cart.post("/cart-items", (req , res) => {
//     cartItems.push(req.body);
//     res.json(cartItems);
// });

// cart.put("/cart-items/:id", (req, res) => {
//     cartItems[req.params.id] = req.body;
//     res.json(cartItems);
// });

// cart.delete("/cart-items/:id", (req,res) => {
//     cartItems.splice(req.params.id, 1);
//     res.json(cartItems);
// });

module.exports = cart;