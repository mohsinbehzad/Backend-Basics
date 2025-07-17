const express = require('express')
const app = express()

app.set('view engine', 'ejs')
// This tells Express that you'll be using EJS (Embedded JavaScript) as the template/view engine.
// When you call res.render('index'), Express will look for a file named index.ejs inside a views/ folder by default.

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000)




// A view engine is a software component that allows the rendering of dynamic content onto a web page
// EJS stands for Embedded JavaScript. It is a template engine designed to be used with server-side JavaScript environments like NodeJS and It is used to generate dynamic content in a web page.



// npm init -y
// npm i express
// npm i ejs