// given marks of students  find  60 > moe than taht add, 5 bounes makes  to each selected students
let mark=[1,20,30,50,60,70,34,90];
let res =mark.filter((v)=>v>60).map((v)=>v+5);
console.log(res);



// create a array of prices 
// -> select prices >500 give each selected prodect 100rs discount 
//-> find the biling amount 

let store=[200,1101,2221,1302,342,10];
let max=store.filter((v)=>v>500).map((v)=>v-100);
console.log(max);

console.log(max.reduce((p,c)=>p+c));

let max1=store.filter((v)=>v>500).map((v)=>v-100).reduce((p,c)=>p+c);
console.log(max1);




