let EventEmitter = require('events').EventEmitter;
let util = require('util');

let db = [
    {name:'ashu', pass:'123'},
    {name:'suk', pass:'12345'},

]

function User () {
    //inheriting eventemitter
    EventEmitter.call(this);

};

//inherit prototype properties
util.inherits(User, EventEmitter);

User.prototype.save = function(obj) {
    db.push(obj)
    this.emit('saved-user', 'user saved successfully')
    console.log('new obj pushed')
};

module.exports = User;