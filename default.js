function add(number1,number2){
    return number1 + number2;
}
const total =add(15,15);
console.log(total);

//default variable in a function.hare 20 is a default variable

function add(number1,number2=20){
    return number1 + number2;
}
const total2 =add(15);
console.log(total2);