// import express from 'express';
const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/profile', (req, res) => {
    res.send("Welcome to Profile Page!");
})

app.get('/about', (req, res) => {
    res.send("Welcome to About Page!");
})

app.listen(3000);








// npm init -y
// npm i express
// npx nodemon app.js