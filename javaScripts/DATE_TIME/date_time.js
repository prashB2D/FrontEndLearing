let curentDate=new Date();
console.log(curentDate);
console.log("-------------------------------------------");
// * .toString()  
// it will return the date in string formatn
console.log(curentDate.toString());
console.log("-------------------------------------------");


// * .toDateString()
// it will return  only date not time
console.log(curentDate.toDateString());
console.log("-------------------------------------------");

// * .toTimeString()
// it will return  only time not date
console.log(curentDate.toTimeString());
console.log("-------------------------------------------");


// * .toLocaleTimeString()
// it will return the time in local format
console.log(curentDate.toLocaleTimeString());
console.log("-------------------------------------------");


// * .toLocaleDateString()
// it will return the date in local format
console.log(curentDate.toLocaleDateString());
console.log("-------------------------------------------");

console.log("***************************************************************************************************");


// ! cousteam date 
// 2 way we can crete the date
// 1st way
// In this the , // ^ month is start from 0 to 11
let customeDate1=new Date(2024,0,14);  // year,month,date,hours,minutes,seconds
console.log(customeDate1);
console.log(customeDate1.toString());
console.log("-------------------------------------------");

// 2nd way
// In this the String way  // ^ month is start from 1 to 12
let customeDate=new Date("2024-01-14");
console.log(customeDate);
console.log(customeDate.toString());
console.log("-------------------------------------------");

// Adding the time in the date
let customeDate2=new Date(2024,0,14,10,30,45);  // year,month,date,hours,minutes,seconds
console.log(customeDate2);
console.log(customeDate2.toString());
console.log("-------------------------------------------");

let customeDate3=new Date("2024-01-14 10:30:45");
console.log(customeDate3);
console.log(customeDate3.toString());
console.log("-------------------------------------------");

console.log("***************************************************************************************************");


// ! geter method
// get the date and time from the date object
// return in the number 
let localDate= new Date();
    console.log("the year :" +localDate.getFullYear());  // get the year
    console.log("the month :" +localDate.getMonth());  // get the month.      
    console.log("the date :" +localDate.getDate());  // get the date
    console.log("the day :" +localDate.getDay());  // get the day
    console.log("the hours :" +localDate.getHours()); // get the hours
 
 console.log("***************************************************************************************************");
   

//! set Method 
let localDate2= new Date();
localDate2.setFullYear(2003);
localDate2.setMonth(9);   // st from 0 to 11
localDate2.setDate(23);
localDate2.setHours(0);   // 24h formate
localDate2.setMinutes(30);
localDate2.setSeconds(20);
console.log(localDate2.toString());
