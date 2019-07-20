const express = require('express');
const app = express();

app.use(express.static(__dirname+'/static'))

app.get('/', function(req,res) {
    res.send('Hello Js world')
})

app.get('/about', function(req,res) {
    res.send('this is about pg')
})

app.post('/about', function(req,res) {
    res.send('this is post route')
})

app.post('/test-put', function(req,res) {
    res.send('this is put req')
})

app.get('/index', function(req,res) {
    res.sendFile(__dirname+'/index.html', (e)=> {
        if(e) {
            console.log(e)
        }
    })
})

app.get('/json', function(req,res) {
    res.status(200).json({"name":"myfirst-app","version":"1.0.1"})
})

app.use(express.static(__dirname+'/static'))

app.get('/signup', function(req,res) {
    res.sendFile(__dirname+'/signup.html', (e)=> {
        if(e) {
            console.log(e)
        }
    })
})

app.post('/signup', function(req,res) {
    let data = req.body;
    console.log(data)
    res.sendFile(__dirname+'/thanks.html', (e)=> {
        if(e) {
            console.log(e)
        }
    })
})

app.use(express.json());
app.use(express.urlencoded());

app.listen(3000, ()=> console.log('server started on port 3000'));
