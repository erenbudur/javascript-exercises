const sumAll = function(n1,n2) {
    if (!(typeof n1 == "number" && typeof n2 == "number") || n1<0||n2<0)
    {
        return "ERROR"
    }
    let larger = n1>n2 ? n1 : n2;
    let smaller = n1<n2 ? n1 : n2;

    let fsum = 0;
    for(;smaller<=larger;smaller++){
        fsum+=smaller
    }
    return fsum
};

// Do not edit below this line
module.exports = sumAll;
