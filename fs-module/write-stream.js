let fs = require('fs');
let data = 'there is no gyuaranteed ordering when using asynchronous methods, so the follwing is prone to error bcos the fs.start() operation may complete the fs.rename() operation'

let writerstream = fs.createWriteStream(__dirname+'hello.txt',{encoding:'utf-8'});

writerstream.write(data)

writerstream.on('finish', function() {
console.log('successfully written');
});

writerstream.on('error', function() {
    console.log(err);
    });