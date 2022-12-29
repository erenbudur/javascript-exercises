const reverseString = function(s) {
    let ss = "";
    for (let i = 0;i<s.length;i++){
        ss= s.charAt(i) + ss
    }
    return ss

};

// Do not edit below this line
module.exports = reverseString;
