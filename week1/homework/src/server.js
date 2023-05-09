'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  let state = 10;

  const server = http.createServer((request, response) => {
    // TODO: Write your homework code here
    
        if(req.method === 'GET' && req.url === '/state'){
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({state}));
    }else if(req.method === 'GET' && req.url === '/add'){
      state = state + 1;
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({state}));
    }else if(req.method === 'GET' && req.url === '/subtract'){
      state = state - 1;
      res.writeHead(200,{'Content-Type': 'application/json'});
      res.end(JSON.stringify({state}));
    }else if(req.method === 'GET' && req.url === '/reset'){
      state = 10;
      res.writeHead(200,{'Content-Type': 'application/json'});
      res.end(JSON.stringify({state}));

    }else{
     res.writeHead(404,{'Content-Type': 'application/json'});
      res.end(JSON.stringify({error:'Not found'}));

    }

  });

  return server;
}

module.exports = {
  createServer
};
