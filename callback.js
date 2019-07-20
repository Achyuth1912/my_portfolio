function add(num1, num2, callback) {
    let total = num1 + num2;

    let square = callback(total)

    return square
}

function square(n) {
    return n*n
}

console.log(add(1,2,square))