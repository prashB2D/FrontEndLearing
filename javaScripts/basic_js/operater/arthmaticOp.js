let x=0;
let y=5;         

                        //Arthmatic Operators
//------------------------------------------------------------------------------------------------------------------------
 console.log(".            Arthmatic Operators                    ");

//               +            
let z=y+2;
console.log(z);
//               -
let z1=y-2;
console.log(z1);
//               *
let z2=y*2;
console.log(z2);
//               /
let z3=y/2;
console.log(z3);
//               %
let z4=y%2;
console.log(z4);
//            pree   ++
let z5=++y;
console.log(z5);
//            pree   --
let z6=--y;
console.log(z6);  

//           post  ++
let z7=y++;
console.log(z7); 

//           post --
let z8=y--;
console.log(z8); 


//.                     Assimlation Operators
//------------------------------------------------------------------------------------------------------------------------
 console.log(".            Assimlation Operators                     ");
//               +=
let a =5;
let b=10;
 console.log(a);


// a=a+b;
a+=b;    // short end   +=  
console.log(a);

a-=b;   // short end   -=  
console.log(a);

a*=b;    // short end   *=  
console.log(a);


a/=b;    // short end   /=  
console.log(a);

a%=b;    // short end   %=  
console.log(a);

//                          Comprastion Operators   
//------------------------------------------------------------------------------------------------------------------------
 console.log(".            Comprastion Operators                       ");
let p =10;
let q=10;
let r='10'
let s=10.73982;

// ==
console.log(p==q +" p==q");
console.log(p==r +" p==r");
console.log(p==s +" p==s");

//===
console.log(p===q);
console.log(p===r);
console.log(p===s);

// !=
console.log(p!==q);
console.log(p!==r);
console.log(p!==s);

// !=== ??
// console.log(p!===q);
// console.log(p!===r);
// console.log(p!===s);

// >
console.log(p>q);
console.log(p>r);
console.log(p>s);

// <
console.log(p<q);
console.log(p<r);
console.log(p<s);

//>=
console.log(p>=q);
console.log(p>=r);
console.log(p>=s);

//<=
console.log(p<=q);
console.log(p<=r);
console.log(p<=s);


//                      Logical Operators
 console.log(".             Logical Operators                      ");

 let T=true;
 let F = false;

 // && 
 console.log(T&&T);
 console.log(T&&F);
 console.log(F&&T);
  console.log(F&&F);

  // | 
 console.log(T||T);
 console.log(T||F);
 console.log(F||T);
  console.log(F||F);

  // !
console.log(!T);
console.log(!F);





//                      condational Operators
 console.log(".             condational Operators                      ");

let wDrow=1000;
let blance= 600;
blance=blance>=wDrow? blance-wDrow :"error !!! blance is less";
console.log(blance);


//    small operation 
let aa =3;
let bb=4;
let cc =1;
console.log((aa>bb && aa>cc)? aa  :(bb>aa && bb>cc)? bb: cc );








  









