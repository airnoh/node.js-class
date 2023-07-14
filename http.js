// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Welcome to my Home Page');
//     }else if (req.url === '/about') {
//         res.write('Welcome to my About Page');
//     }else{
//         res.write('Sorry, no such page found!');
//     }res.end()
// });

// const port = 3000;
// server.listen(port);
// console.log(`Server running on port ${port}`);

const https = require('https');

const server = https.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to my Home Page');
    }else if (req.url === '/about') {
        res.write('Welcome to my About Page');
    }else{
        res.write('Sorry, no such page found!');
    }res.end()
});

const port = 3000;
server.listen(port);
console.log(`Server running on port ${port}`);