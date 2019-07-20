function square(err,n) {
    if (err){
        return 'not possile'
    }
    return n*n
}

function add(num1, num2, callback) {
    if(typeof num1 != 'number') 
    {
        return callback('suare not possible', null)
    }
    else{
    let total = num1 + num2;

    let square = callback(null,total)

    return square
}
}

console.log(add('a',2,square))