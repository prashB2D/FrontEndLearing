// normal flow

let a =10;
console.log(a);

// now we try to access before 
//! ReferenceError:
console.log(b);
let b=10;

//* why
// the callstack wokrs/contntes //?  JEC
//* JEC 
// javaScripts execution contest 
// in the there are // ? 2 main pase
//?  CreationPase    ExectionPase

//*  CreationPase 
// in this JEC willn //! allocate memory to
//? 1 variables  2 fucntion   3 Objects
// in this it will pre reserve the memory to that var 

//* ExectionPase
// in this the acutal exucation wokr 
//? asscing , printing  ,operation  
// in this we 

