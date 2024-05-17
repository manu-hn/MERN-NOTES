const http = require('http');



const routes = {
    "/": function index(req, res) {
        res.writeHead(200, { 'Content-Tye': 'text/plain' });
        res.end('Hey This is Home Function');
    },
    "/foo": function foo(req, res) {
        res.writeHead(200, { 'Content-Tye': 'text/plain' })
        res.end('Hey This is Foo Function');
    },
    "/hello" : function hello(req, res){
        res.writeHead(201, {'Content-Type' : 'text/plain'});
        res.end('Hello Function')
    }
}

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Tye': 'text/plain' });
//     res.write('Hello World');
//     res.end();
// }).listen(1337, () => {
//     console.log('Server is running on port 1337');
// })


http.createServer(function (req, res) {
    if (req.url in routes) {
        return routes[req.url](req, res)
    }

    res.writeHead(400);
    res.end('No Page Found')
}).listen(1337, ()=>console.log('Server is running on port 1337'));

