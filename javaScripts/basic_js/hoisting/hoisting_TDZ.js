//                        Hoisting 


console.log(call1);  //     undefined.
// console.log(call2);  // Cannot access 'call2' before initialization
// console.log(call3);  //  Cannot access 'call3' before initialization

var call1=100;   //  calling var which will not go to TDZ (temporary dead zone). // will give undefined
// let call2=200;    //  this will be in the TDZ 
// const call3=300;     // this will be in the TDZ 


 