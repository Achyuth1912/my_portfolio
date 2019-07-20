const express = require('express');
const app = express();
const hbs = require('hbs');
const fs = require('fs')

//setting up view engine
app.set('views', __dirname+'/views')
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname+'/views/partials')

app.use(express.static(__dirname+'/static'))

//app level middleware
function logger(req, res, next) {
console.log(req.method, req.url)
next();
}

app.use(logger)

app.use(function(req, res, next) {
    console.log('2nd middleware')
    next(new Error('something went wrong'))
})



app.get('/', function(req,res) {
    res.render('index', {title:'my home page', name: '', whtdng: '<p>this is a para escaping para tag on page</p>',
             description: {
                 fullName: 'Achyuth Murthy',
                 gender: 'male',
                 age: 26
            
             },
             hobbies: ['Football','music','coding'],
             married: false
})
});

//route level middleware
function aboutMiddleware(req, res, next) {
    if(req.query.name == 'achyuth') {
        next()
    } else{
        res.send('you are unauthenicated')
    }
}




app.get('/about', aboutMiddleware, function(req, res) {
   // res.send('this is about page')
    res.render('about', {title: "about pg"})
})

app.get('/test-err', function(req,res,next) {
fs.readFile(__dirname+'hello.txt', function(err, data) {
    if(err) {
        next(err)
    }
    else {
        console.log(data)
        res.json({data});
    }
})
})

app.use(function(req,res,next) {
    res.status(404).send('page not found');
})

app.use(function(err, req,res,next) {
    console.log(err);
})

app.listen(3040, ()=> console.log('server started on port 3040'))
