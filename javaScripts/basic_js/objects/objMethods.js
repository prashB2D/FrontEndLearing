// !       obj  methoods

let st3={
      name:"prashu",  
    lastName:"rs",
    id:23,
    k:[1,32,4,4,3],
    1:10,
    homeDetais:{
      hNum:10203,
      hName:"manju"
    }
}
console.log(st3.k[1]);

//? we have to accs the ONLY key 
console.log(Object.keys(st3));
// It will return in teh form of arrry soo we inrate tehm
//*Object.keys(); 

let arr = Object.keys(st3);
console.log(arr);


//? to acces  ONLY vlue 
 //*Object.values();

console.log(Object.values(st3));




//? copying of the OBJ 
//.         //*Object.assign();
//          Object.assign({},k,l);
//.        Object.assign(" place where to put "," source 1"," source 2")
//.        we can pass any number of source to br copyed and put to destination


let k ={
name: 'prashu',
age :21,
asrt:"car"
}
let l ={
  name :'yashu',
  age:23,
  home:1
}

let m =Object.assign({},k,l);
console.log(m);



//!  obj CRUD operation 





//!   obj secqerty 

let tem={
  name: 'prashu',
age :21,
asrt:"car"
}

tem.Home="new home";
console.log(tem);
//?       where we cant non 1 exted teh ,, add extret fild to obj 
//*       Object.preventExtensions()
Object.preventExtensions(tem);
//! can 
//   --> delete.
//   -->  MODFIVE //UPDATE
//! cnat 
//  --> add new filds

tem.age=22;
delete tem.Home;
tem.home ="new home ";
console.log(tem);


// ? to check if teh sequert is there or not then we use this 
//*       Object.isExtensible()
console.log(Object.isExtensible(tem));   // return true if no resrtion i stehre or not 
                                        // return flase if the   sequert is there 


                    
//*   Object.seal()
Object.seal(tem);
//! can 
//   -->  MODFIVE //UPDATE
//! cnat 
//   --> delete
//  --> add new filds

tem.name='prashu rs ';      // works 
tem.car='bmw';              // no 
console.log(tem);
delete tem.asrt;             // no
console.log(tem);        


//* Object.isSealed()
console.log("Object.isSealed() " +Object.isSealed(tem));



//*   Object.freeze()
// read only state
Object.freeze(tem);
//! can 
// read 
//! cnat 
//   -->  MODFIVE //UPDATE
//   --> delete
//  --> add new filds

//* Object.isFrozen()



//*  Object.entries();
let ar2=Object.entries(tem);
console.log(ar2);

//* Object.fromEntries()
let arrA=[['name1','i dont knwo '],['age',99],['car','G vagan']]; // every thing must be in the single cort ' '
console.log(Object.fromEntries(arrA));


//*  Object.defineProperty()
let A={
  v1:10,
  v2:20,
  v3:"duhsb"
}
console.log(" the  obj of A ", A);
// define a new property 'v4' on object A
let AZ = Object.defineProperty(A, "v4", { // by defout all peortys are flasde
  value: "vlaue_from_A",
  writable: true,   // we cant upaste 
  enumerable: true,  // we can inrate the 
  configurable: true // 
});
console.log(AZ);
AZ.v4="chaged value ";
console.log(AZ);

let AQ = Object.defineProperty(A, "v9", { // by defout all peortys are flasde
  value: "vlaue_from_A",
  writable: true,   // we cant upaste 
  enumerable: false,  // we can inrate the 
  configurable: true // 
});
console.log("the new "+AQ);

console.log(Object.entries(AQ));





//* Object.hasOwn()
// Object.hasOwn(objRef , "fildName")
console.log(Object.hasOwn(AQ,"v4")); // true if there 
console.log(Object.hasOwn(AQ,"v5")); // false



//*  Object.is()
console.log(Object.is(10,AQ.v1)); // True i fteh value is maching to it 
console.log(Object.is(110,AQ.v1)); // flase if teh vlaue is not matching 





