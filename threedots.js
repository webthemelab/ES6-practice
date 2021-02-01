//old array jog korar niyom

const age =[12,15,16,14,17];
const age2 = [18,21,14];
const age3 = [28,30,32];

const allAge = age.concat(age2).concat(age3);
console.log(allAge);

// three dotes system(sprade operator)
const allAge2 = [...age, ...age2, ...age3];
console.log(allAge2);



