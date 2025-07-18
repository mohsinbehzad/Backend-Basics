const express = require('express')
const app = express()


// These two lines are middleware functions in Express.js that allow your server to read data from the client, especially in POST requests (like form submissions or JSON data from APIs)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Without the above two lines, req.body would be undefined, meaning you can’t access user-submitted data.

app.set("view engine", 'ejs')

app.get('/', (req, res) => {
    res.render('form')
})

// app.get("/get-form-data", (req, res) => {
//     console.log(req.query)
//     res.send('Form Submitted Succesfully')
// })
// But we cannot use get Method because password is not secure. and password may be shown in the url

app.post('/get-form-data', (req, res) => {
    console.log(req.body);
    // by default Express cannot read data of Post method, So we will use middlewares
    res.send("Form Submitted Successfully")
})

app.listen(3000)