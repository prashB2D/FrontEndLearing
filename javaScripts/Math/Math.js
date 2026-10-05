//! Math.
// its an Global object and it is used to perform mathematical operations


//* .PI
console.log(Math.PI);

let num = 5.7
//* .round()
// it will round the number to nearest integer
console.log(Math.round(num));

//* .floor()
// it will round the number to lower integer //^ point to current NUM. 4.999 -> 4
console.log(Math.floor(num));

//* .ceil()
// it will round the number to upper integer //^ point to next NUM.    4.001 -> 5
console.log(Math.ceil(num));

//* .trunc()
// it will remove the decimal part of the number
console.log(Math.trunc(num));

// * .random()
// it will return the random number between 0 and 1 // 1 si exculed it will never come 
console.log(Math.random());

//? we wnat it range 0 to 10 
console.log(Math.floor(Math.random() * 10)); // 0 to 10

//* .pow()
// it will return the power of the number
console.log(Math.pow(2, 3)); // 2^3 = 8

//* .sqrt()
// it will return the square root of the number
console.log(Math.sqrt(16)); // 4

//* .abs()
// it will return the absolute value of the number
console.log(Math.abs(-5)); // 5

//* .max()
// it will return the maximum value from the given numbers
console.log(Math.max(1, 2, 3, 4, 5)); // 5                  
