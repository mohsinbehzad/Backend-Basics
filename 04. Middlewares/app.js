const express = require('express')
const app = express()
const morgan = require('morgan')

// custom middleware
// It will run for all routes by default
app.use((req, res, next) => {
    const a = 5;
    const b = 7;

    console.log(a + b);

    next()
})

// HTTP request logger middleware for node.js  // 3rd party middleware
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('This is Middleware')
})


// if you go to profile route then again above custom and third party morgan middleware will be called
app.get('/profile', (req, res) => {
    res.send("Welcome to Profile")
})

app.get('/about', (req, res, next) => {
    console.log('Custom middleware for about route');
    next()
}, (req, res) => {
    res.send('This is custom Middleware for /about route')
})


app.listen(3000)



// npm init -y
// npm i express
// npm i morgan       // 3rd party middleware