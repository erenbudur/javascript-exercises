const add = function(a,b) {
  return a + b
	
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	return arr.reduce((acc,cur)=> acc +cur,0)

};

const multiply = function(arr) {
  return arr.reduce((acc,cur)=> acc *cur,1)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
  if(a==0){return 1 }
	let res = 1;
  for(let n = a;n>0;n--){
    res *= n
  }
  return res
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
