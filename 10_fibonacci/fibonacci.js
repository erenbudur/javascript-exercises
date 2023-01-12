const fibonacci = function (n) {
    if (n < 0) {
return "OOPS"
    }
    let acc = 1
    let val = 1
    for (let i = 0; i < n - 1; i++) {
        let temp = val;
        val = val + acc;
        acc = temp;
    }
    return acc
};

// Do not edit below this line
module.exports = fibonacci;
