// function doubleIt(num){
//     return num * 2;
// }
// const result = doubleIt(10);
// console.log(result);

//=========================================

// const double = function(num){
//     return num * 2;
// }
// const result = double(20);
// console.log(result);

//============== ES6 version (arrow function)==============
// const double = num => num * 2;
// const result = double(500);
// console.log(result);

// const doubleParameter = (x,y) => x + y;
// const result = doubleParameter(50,40);
// console.log(result);

// const emptyParameter = () =>5;
// const result = emptyParameter();
// console.log(result);

//====big parameter (arrow function)==============
const BigMath = (x,y)=>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = BigMath(8,7);
console.log(result);