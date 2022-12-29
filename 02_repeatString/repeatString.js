const repeatString = function(s,n) {
    if (n<0){
        return "ERROR"
    }
    let sf =""
    for (let i = 0;i<n;i++){

        sf +=  s
    }
    return sf
};

// Do not edit below this line
module.exports = repeatString;
