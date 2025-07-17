// import http from 'http';
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == "/profile") {
        res.end("Welcome to Profile Page")
    }
    if (req.url == "/about") {
        res.end("Welcome to About Page")
    }
    if (req.url == "/") {
        res.end('Hello World!')
    }
})

server.listen(3000)



// first write command "npm init -y"
// search in google "localhost:3000/"
// write command "npx nodemon app.js"
// search in google "localhost:3000/profile"
// search in google "localhost:3000/about"
