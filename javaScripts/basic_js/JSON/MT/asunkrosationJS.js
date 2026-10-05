//!                Js is Synchronous  
// to make it asynchronous we use this function

console.log(" the thread st ");

//* setTimeout(callback function, timeout in ms)
// It is an asynchronous method
// Executes only 1 time after the specified time
// Accepts: //? callback function and timeout

setTimeout(()=>{
    console.log(" ex after end statmenant ");
    
} , 2000)

//^  send aler to html 

setTimeout(()=>{
alert(" time out")
}
,4000);

console.log(" the thread end  ");

//* setInterval(callB() , time ms)
// setInterval(callback function, timeout in ms)
// It is an asynchronous method
// Executes repeatedly at specified intervals
// Accepts: //? callback function and timeout

setInterval(()=>{
    console.log(" hello ");
},2000)

//*  clearTimeout()
// ist used to clear out the give time to a timed function //? setInterval()
// clearInterval() / clearTimeout()
// Used to stop a timer before or while it runs

let paid = false;
// Runs repeatedly every 1 second
let action = setInterval(() => {
  console.log("send money");
}, 1000);
// Executes once after 1 second to check payment status
let makeHimPay = function () {
  if (paid) {
    clearInterval(action); // Stops the setInterval repeated execution
  }
};
setTimeout(() => {
  makeHimPay();
}, 1000);



//*  clearInterval()
// its used to cler out the time reaption  of //? setInterval()

//? using gobal varabel

let c=0;
let alram =setInterval(()=>{
console.log( `weekup ` +c);
c++;
// if(c>2){
//     clearInterval(alram);
// }

},2000)

//? usien setTimeOut

setTimeout(()=>{
clearInterval(alram);
},6000)




