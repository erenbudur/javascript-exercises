const findTheOldest = function(people) {

    return people.reduce((oldest,current)=>{
        return getAge(oldest.yearOfBirth,oldest.yearOfDeath)>getAge(current.yearOfBirth,current.yearOfDeath)? oldest:current


    })
};

function getAge(b,d){
    if(!d){
        d = new Date().getFullYear()
    }
    return d-b
}

// Do not edit below this line
module.exports = findTheOldest;
