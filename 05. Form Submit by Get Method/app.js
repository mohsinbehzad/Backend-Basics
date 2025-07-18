const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/register', (req, res) => {
    res.render('index')
})

app.get('/register-user', (req, res) => {
    console.log(req.query);
    res.send("user registered")
})

// the disadvantage of Get method is that password is not secured, it can even show in the url

app.listen(3000)