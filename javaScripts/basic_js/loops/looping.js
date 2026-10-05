// let te=8;

// For loop: use it when we know the limit or the end of the loop.


for(let j=5;j<=11;j++){
for(let i=1;i<=10;i++){
    console.log(j+" X "+i+" = "+j*i);
    
}
 console.log();
}


// While loop:
// Use it when we do not know the end limit of the looping iteration.

let it=10;
while(it>=0){
    console.log(it--);
    
}


// Do-while loop:
// Use it when you want to perform an action once before checking the condition.

// Example: free trial


let coin=10;
do{
// free trial
console.log("take increment");
// if(coin>1){
coin=coin-2;
// }
}while(coin>1)


// Break and continue

for(let i =0;i<5;i++){
if(i%2==0) continue;
else console.log(i);

}

//           break

for(let i =0;i<5;i++){
if(i%2==0) continue;
else console.log(i);

}


// Short-circuit
// &&

let a=10;
let b =0;
if(--a>b && --a>b && false ){

}
console.log(a , b);
if(--a>b &&  false && --a>b ){

}
console.log(a , b);
if(false && --a>b  && --a>b ){

}
console.log(a , b);


// || short-circuit

var output=true||false;
console.log(output);
var output=false||"hii"||true||false;
console.log(output);
var output=1||false||"hii"||true||false;
console.log(output);


// Difference between |, &, &&, and ||
var ab=10;
var ba =0;
if(--ab>ba & --ab>ba & false ){
    console.log("hfeiu");
}
console.log(ab , ba);

if(--ab>ba | --ab>ba | false ){
    console.log("hfeiu");
}
console.log(ab , ba);


// Nullish operator example


let x= null>>z;
console.log(x);
let y=null;
let as= null>>y;
console.log(as);
let asp= null>>'dibdifw';
console.log(asp);




