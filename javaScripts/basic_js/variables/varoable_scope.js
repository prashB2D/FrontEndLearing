//.                                global scope

// scope of the variable 



var a = 100;        //
let b = 101;          // global scope
const c = 103;       //

function print() {
    console.log(a, b, c);   // can access inside the function also 

}
print();


//---------------------------------------------------------------------------------------------------

//                      block scope

{
    var a = 100;        // global scope
    let b = 101;          // block scope 
    const c = 103;       // block scope

    console.log(a, b, c);   // can access inside the block also
}
// we can only access this Var 

console.log(a);  // will execute because var is global scope and can be accessed outside the block also
console.log(b);    // b is not defined will not execute because let is block scope and cannot be accessed outside the block
console.log(c);  // c is not defined

//---------------------------------------------------------------------------------------------------
//                              function scope 
car();
function car() {
    var name12 = "prashanth";  // function scope
    let model = 8.4;        // function scope
    const price = 1000;     // function scope

    console.log(name12, model, price); // can be accessed inside the scope 

}

console.log(name12, model, price);  // cannot access any variable no exception 
