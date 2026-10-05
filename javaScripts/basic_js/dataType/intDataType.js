//                          data Type 

                                           // number data type

let num= 10;
console.log(num);

console.log(typeof(num));  // number


num =10.343
console.log(num);
console.log(typeof(num));  // number. note: in js there is no float data type. all are number data type.


                                        // string data type

let str="Hello World";
console.log(str);
console.log(typeof(str));  // string

let str1='Hello World';
console.log(str1);
console.log(typeof(str1));


let str2='H';
console.log(str2);
console.log(typeof(str2));


                                              // boolean data type

let bool=true;
console.log(bool);
console.log(typeof(bool));  // boolean

let bool1=false;
console.log(bool1);
console.log(typeof(bool1));  // boolean




                                    // null data type
let nulV= null;
console.log(nulV);
console.log(typeof(nulV));  // object




                                    // undefined data type

let undV;
console.log(undV);
console.log(typeof(undV));  // undefined

let undV1=undefined;
console.log(undV1);
console.log(typeof(undV1));  // undefined

console.log(undV-'ukj'); //????????
console.log(nulV*'ukj'); //????????  NaN  (Not a Number)  because null is treated as 0 and 0*'ukj' = NaN



                            // bigInt data type
let bigInt=23n; // is the notation we use to spifive the ist big int
console.log(bigInt);
console.log(typeof(bigInt));
let bigInt2= 255627613751235615376512731672253699999939939393939393939393939393939393993939393939393939393939393939393939999999999595494949494949494949494973728*10000999393939293299239239923923923993000000;
console.log(bigInt2);
console.log(typeof(bigInt2));

                            //symbol data type
let sym=Symbol('Hello');
console.log(sym);
console.log(typeof(sym));





