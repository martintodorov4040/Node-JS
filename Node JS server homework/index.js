const http = require('http');

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
  
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Welcome!</h1><p> This is the page One</p>');
  } else if (req.url === '/student') {
   
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end( 
        ` 
    <p>Name: Martin</p>
    <p>Lastname: Todorov</p>
    <p>Age: 19 </p>
    <p>Academy: SEDC</p>
    <p>Subject: NODE.JS</p>
    <p>Trainers: Ivo Kostovski, Ivan Jamandilovski</p>
    `
     
    );
  } else {

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(port, hostName, () => {
  console.log(` http://${hostName}:${port}/`);
});