//!  destruchering 
//*   ARRAYS DS
//*  let []= arrRef

let a=["white","blue",'red',"green"];
let [w,b,r,g]=a;  // unPacking teh arrays elements
                // works on postion == index

console.log(w);
console.log(b);
console.log(r);
console.log(g);
console.log("-----------------------------------------------------------------------------");
//? If i  wnat to skip some emlemnts we use 
//!  , to skip the emlemts

let [,z,,c]=a; // skiping index 0 and 
console.log(z);
console.log(c);

//? use of uisng Destruchering 

let [aa,bb]=[11,20];  // with out asisng teh value
let [aaa,bbb,cc]=[11,20];   // c is undefined becuse no vlaue in array to assin to it 
let [aaaa,bbbb,ccc=30]=[11,20]; 
// swaping
let k =10;
let s=20;
 [s,k]=[k,s];     // we cant use let becuse k,s also redelaured
console.log(k, s);

console.log("-----------------------------------------------------------------------------");
//! IN NESTED ARRAY 
let arra=[0,1,2,3,[1,2],5];
let [f,rr,gg,t,[l1,l2],o]=arra;
console.log(f);
console.log(rr);
console.log(gg);
console.log(t);
console.log(l1);
console.log(l2);
console.log(o);
let [,,,,[l1,l2],o]=arra;



console.log("============");


