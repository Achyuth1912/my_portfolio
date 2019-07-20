const http = require('http');

let server = http.createServer(function(req,res) {
    console.log(req.url)
    if(req.url =='/about') {

        res.writeHead(200, {'content-type':'text/plain'})
        res.end('About me')
    }
        else if(req.url == '/blog') {
            res.end('blog page')

    }

    else
    {
        res.statusCode(484).end('page not found')
    }
});

server.listen(3875, ()=>console.log('server up and running'))
