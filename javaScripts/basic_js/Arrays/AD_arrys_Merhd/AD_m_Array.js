let array = [10, 20, 30, 40, 50];
console.log('original array:', array);

//                  MAP()
// Returns a new array and does not modify the original array.
// Callback signature: //! map(value, index, array) 
//      we dont pass it internaly it will only pass


let K = array.map((v,i,a)=>{ // * thr order of  V I A shude be sme as its                           
    console.log(v)+" ";             // even if we pass in woring order only virable will chage "order shdue be same "IVA
      console.log(i+" ");           //IVA =I=value , V= index ,A = array
      console.log(a+" ");
    
})



// Example: create a direct copy while logging value and index
let newA = array.map((value, index) => {
    console.log(value, index);
    return value; // return to preserve mapped values
});

// Example: increment each value by 1
let newA2 = array.map(value => value + 1);

console.log('after map, original:', array);
console.log('newA:', newA);
console.log('newA2:', newA2);


// Q when i want to do some task in Array and store in new Array
// !  normlay 
let aar = [1,2,3,4,6,7,8];
let result =[];
for(let i=0;i<aar.length;i++){
    // result[i]=aar[i]*10;
    result.push(aar[i]*10);

}
console.log(result);



// now this same cide cab ne readues rto shiret 
// !     using MAP()
let result2= aar.map((v)=>v*10);
console.log(result2);


// return ord number in an arry 

// let aodd=aar.map((v)=>(v%2!==2)?-1:v);
let aodd = aar.map((v) => (v % 2 === 0) ? " " : v);
console.log(aodd);


//?  1 way convert teh arry into String 
let stri7ng =aar.map((v)=>{
return v+"";
})
console.log(stri7ng);

//? 2nd way convert teh arry into String 
console.log(aar.map(v1 => v1.toString()));


let stor=["ale","iphone","bike","car"];
// let newStor=stor.map((v)=>"**"+v);

let newStor=stor.map((v)=>v.padStart(5,"*"));



console.log(stor);
console.log(newStor);

//? i want to print elemt grater than >21
array.map((v)=>{ (v>21)?console.log(v):console.log() });

// map ,fliter ,reduce , 


// *         filter()
// filter is just like teh MAP()
// Returns a new array and does not modify the original array.
// Callback signature: //! map(value, index, array) 



// 1 DIFF IN  filter() AMD TEH MAP()
//? i wnat to elemts >21
//! mpa() way 
let zz= array.map((v)=>v>21);
console.log(" map "+zz);  // now see  map false,false,true,true,true "i will reuslt in condtion not vlaue "
                                // and also we have other non elemts alos 
//!  filter() way 
let zy= array.filter((v)=>v>21);
console.log(" filter "+zy);  // in this fliter we get onky the elemnts hwihc are acceoted by the cination tehn only it are insertd to arry




//? evn number sequar 

//! we can but not 
let aodd1 = aar.map((v) => (v*v % 2 === 0) ?  v*v : "");
console.log("jfirfi "+aodd1);

//! using filter 
let add2= aar.filter((v) => (v*v % 2 === 0)).map((v)=>v*v);
console.log(add2);

let sum=0;
array.map((v)=>{
    sum =sum+v;
})
console.log(sum);


//*    reduce

array.reduce((p,c,i)=>{
      console.log("p "+p);
      console.log("c "+c);
      console.log("i "+i);

});

array.reduce((p,c,i)=>{
    console.log(p);
    console.log(c);
    console.log(i);
    return p;
    
})

array.reduce((p,c,i)=>{
    console.log(p);
    console.log(c);
    console.log(i);
    return p+"1";
    
})
array.reduce((p,c,i)=>{
    console.log(p);
    console.log(c);
    console.log(i);
    return p+"1";
    
},10 // ! seting P value form whre to st 
)

let cc =array.reduce((p,c)=>{
    return p+c;
})
console.log(cc);



let soop=[10,3,203,43,54,12];
let rese=soop.reduce((p,c)=>(p>c)?p:c);
console.log(rese);

console.log("the max number "+soop.reduce((p,c)=>(p>c)?p:c));
console.log("the min number "+soop.reduce((p,c)=>(p<c)?p:c));
console.log("the prodect number "+soop.reduce((p,c)=>p*c));


// //? =============================================
// //? ORIGINAL ARRAY AND BASIC LOGGING
// //? =============================================

// let array = [10, 20, 30, 40, 50];
// console.log('Original Array:', array);

// //! =============================================
// //!                   MAP()
// //! =============================================
// //* Returns a new array and does NOT modify the original array.
// //* Callback signature: map(value, index, array)
// //* Note: The order of arguments is fixed: (value, index, array).
// //* Even if you rename them, the order matters. (e.g., (v, i, a))

// let K = array.map((v, i, a) => {
//     console.log(v + " ");  //? value
//     console.log(i + " ");  //? index
//     console.log(a + " ");  //? full array
// });

// //? ----- Example: Create a direct copy while logging value and index -----
// let newA = array.map((value, index) => {
//     console.log(`Value: ${value}, Index: ${index}`);
//     return value; //* Return the value to preserve it in the new array
// });

// //? ----- Example: Increment each value by 1 -----
// let newA2 = array.map(value => value + 1);

// console.log('After map, Original Array:', array);
// console.log('newA (copy):', newA);
// console.log('newA2 (incremented by 1):', newA2);

// //! =============================================
// //! TRADITIONAL LOOP vs MAP() FOR TRANSFORMATIONS
// //! =============================================

// //? ----- Traditional Approach (using for loop) -----
// let aar = [1, 2, 3, 4, 6, 7, 8];
// let result = [];
// for (let i = 0; i < aar.length; i++) {
//     result.push(aar[i] * 10);
// }
// console.log('Result using for loop:', result);

// //? ----- Modern Approach (using map()) -----
// let result2 = aar.map((v) => v * 10);
// console.log('Result using map():', result2);





// //! =============================================
// //! FILTERING ODD NUMBERS USING MAP()
// //! =============================================

// //* Returns odd numbers, but replaces even numbers with empty string
// let aodd = aar.map((v) => (v % 2 === 0) ? " " : v);
// console.log('Odd numbers (with even replaced by space):', aodd);

// //! =============================================
// //! CONVERTING ARRAY ELEMENTS TO STRINGS
// //! =============================================

// //? ----- 1st Way: Using Template Literal -----
// let stringArray1 = aar.map((v) => v + "");
// console.log('String Array (Method 1):', stringArray1);

// //? ----- 2nd Way: Using toString() -----
// console.log('String Array (Method 2):', aar.map(v => v.toString()));

// //! =============================================
// //! WORKING WITH STRINGS
// //! =============================================

// let stor = ["ale", "iphone", "bike", "car"];

// //? ----- Add padding to strings (using padStart) -----
// let newStor = stor.map((v) => v.padStart(5, "*"));
// console.log('Original Strings:', stor);
// console.log('Padded Strings:', newStor);

// //! =============================================
// //!           FILTER() vs MAP()
// //! =============================================
// //* filter() returns a new array with elements that pass a condition.
// //* map() returns a new array where every element is transformed.

// //? ----- Using map() to filter (not ideal) -----
// let zz = array.map((v) => v > 21);
// console.log('Map (returns booleans):', zz); //* [false, false, true, true, true]

// //? ----- Using filter() correctly -----
// let zy = array.filter((v) => v > 21);
// console.log('Filter (returns matching elements):', zy); //* [30, 40, 50]

// //! =============================================
// //!           CHAINING MAP() AND FILTER()
// //! =============================================

// //? ----- Find squares of even numbers using map & filter -----
// let evenSquares = aar.filter((v) => v % 2 === 0).map((v) => v * v);
// console.log('Squares of even numbers:', evenSquares);

// //! =============================================
// //!                   REDUCE()
// //! =============================================
// //* reduce() executes a reducer function on each element, resulting in a single output value.
// //* Callback signature: reduce(accumulator, currentValue, index, array)

// //? ----- Basic reduce to sum all elements -----
// let sum = array.reduce((acc, curr) => acc + curr);
// console.log('Sum of array:', sum);

// //? ----- Reduce with initial value -----
// let cc = array.reduce((acc, curr) => acc + curr, 10);
// console.log('Sum with initial value 10:', cc);

// //! =============================================
// //!     REDUCE() FOR MIN, MAX, AND PRODUCT
// //! =============================================

// let soop = [10, 3, 203, 43, 54, 12];

// //? ----- Maximum value -----
// console.log('Max value:', soop.reduce((acc, curr) => (acc > curr) ? acc : curr));

// //? ----- Minimum value -----
// console.log('Min value:', soop.reduce((acc, curr) => (acc < curr) ? acc : curr));

// //? ----- Product of all values -----
// console.log('Product:', soop.reduce((acc, curr) => acc * curr));

// //! =============================================
// //!           ADDITIONAL NOTES & BEST PRACTICES
// //! =============================================
// //* 1. map(), filter(), and reduce() are higher-order functions.
// //* 2. They do NOT mutate the original array (immutable).
// //* 3. Always use the correct method for the task:
// //?    - map()    -> transform every element
// //?    - filter() -> select specific elements
// //?    - reduce() -> accumulate to a single value
// //* 4. Chain methods for clean and readable code.
// //* 5. Callback order is fixed: (value, index, array)
// //!    - You can name them anything, but order matters!
// //* 6. Always return a value from callback (except for side effects).

// //! =============================================
// //!           QUICK REFERENCE CARD
// //! =============================================
// //? map()    : [1,2,3] -> [2,4,6]  (transform each element)
// //? filter() : [1,2,3] -> [2]      (select based on condition)
// //? reduce() : [1,2,3] -> 6        (accumulate to single value)

