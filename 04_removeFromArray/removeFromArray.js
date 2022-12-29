const removeFromArray = function(arr,...vals) {
    let valArr = [...vals]
    let newArr = []
   
    for(let i = 0;i<arr.length;i++){
        if(!valArr.includes(arr[i])){
            newArr.push(arr[i])
        }

    }
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
