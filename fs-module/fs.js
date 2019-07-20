const fs = require('fs');

// Asynchronous

console.log('Prog starts')


fs.readFile('./callback_node.js', 'utf-8', function(err, data) {
    if(err) {
        console.log('err',err)
    }
    else{
        console.log(data)

    }
})

console.log('Prog ends')

//sunchronous
var data = fs.readFileSync('./callback_node.js', 'utf-8')
console.log(data);
console.log('program ends')

fs.writeFile('./hello.txt', 'this is hello text', function(err,d) {
    if(err) {
        console.log('err',err)
    }
    else{
        console.log(data)

    }
})

fs.readDir(__dirname, function(err,data)
{
    if(err) {
        console.log('err',err)
    }
    else{
        console.log(data)

    
}
)
