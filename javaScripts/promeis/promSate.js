//!      PROMISES

//? sate 
//Pending.  intal sate neither fulfilled nor rejected.
//Fulfilled     promise is successfully value is available.
//Rejected      promise failed and reason is available  "exception message"
//Settled   not in the pending sate it cude have me Fulfilled or Settled

//! To handel API 
// we have //* fetch() 
         //  :   is a modern way to handel the API which will result in the //?Promise { <pending> }

// to Handel //! PROMISES 
// 2 way 
// tridinsal way to handel the promiss  
// we have method
//same as  //& try catch finlay
// .then() // .catch()  // .finlay()
// modern whay 
//

//!                                  Tridinsal
//* .then()
// this() take call back function 
// this is used to hande the peomiss
// susu and panding

console.log("----------------------------------------------------------------------------------------------------");


let api = "https://fakestoreapi.com/products";
// let res = fetch(api).then((def)=>{
//     console.log(def);
    
// })

console.log("----------------------------------------------------------------------------------------------------");

// now we are geting the datd but its in the non readabel form 
// make it in read abel form  we use //^ .json()
//^ .json()
// json tells use i will try give the data in json from
// ? try sooo 1 more promiss we need 
// that why we use  'this' 1 more time 

console.log("----------------------------------------------------------------------------------------------------");

// let resA = fetch(api).then((def)=>{
//    return def.json().then((data)=>{
//     console.log(data);
//     })
    
// })
// console.log(resA);

console.log("----------------------------------------------------------------------------------------------------");


//? Tp handle the rejection or ERROR sate we sue 
//* .catch()
// failer & reject 

console.log("----------------------------------------------------------------------------------------------------");
//let api = "https://fakestoreapi.com/products"


// let faileAPI=api+'hii';
// let Fdata=fetch(faileAPI).then((data)=>{
//   return data.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     // console.log(err.message);
//     console.log(" custeam message ");  // ? cousntem message
    
// })
console.log("----------------------------------------------------------------------------------------------------");

//* .finally()

console.log("----------------------------------------------------------------------------------------------------");
//let api = "https://fakestoreapi.com/products"
// let faileAPI=api+'hii';

// let Fdata2=fetch(api).then((data)=>{
//   return data.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     // console.log(err.message);
//     console.log(" custeam message ");  // ? cousntem message
// }).finally(()=>{
//   console.log(" i am working ");
// })
console.log("----------------------------------------------------------------------------------------------------");



// !                    Moderan way 
//* await 
// is moder way to handel promises 
// but its not recomended to use alone  as it moder some browers will not know await //? alone
// we can use await alone "moder compler , brower will understant "
// but older will not know soo they will guve //! await is only valid in async functions and the top level bodies of modules
// to slove this we use //* async 
//* async  
// useD in function 

//! NOT RECOMENDED
//! SyntaxError: await is only valid in async functions and the top level bodies of modules
// let uRead =await fetch("https://fakestoreapi.com/products");
// let read = await uRead.json();    
// console.log(read);


//! RECOMENDED
//&  async function d(){ await pendingCoss };

// async function dumFun(){
// let uRead =await fetch("https://fakestoreapi.com/products");
// let read = await uRead.json();
// console.log(read);
// }
// // note we are use " async " IN A FUNCTION 
// dumFun();

console.log("----------------------------------------------------------------------------------------------------");

//! TO HANDEL FAILER IN MODER WAY 
// try ,catch() ,finaly()
async function dumFun(){
    //* try 
    // to haned the susses and pending sate
    try{
        let uRead =await fetch("https://fakestoreapi.com/products");
        let read = await uRead.json();
        console.log(read);
    //* catch()
    // note we are not use '.'  catch() != .catch()
    // the modern way dont exept call backfunction it accpet message virabel
    }catch(er){
        console.log(er.message);
        console.log("My own message"); 
    //* finally()
    // note we are not use '.'  finally() != .finally()
    }finally{
        console.log(" i am hear "); 
    }
}
dumFun();

