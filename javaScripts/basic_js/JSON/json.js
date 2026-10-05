//1 String fromat e
//2 lightwight formate
//  not part of JS 
//3 other system cant understn 
//4 json have some restrstion

// Normla Obj 
let spp={


    "name":"age",   
    "id ":1,
    "mum":"383",    //! diff in json & obj 
    Pnum:122        // we can have the key in non String 
    ,               // we can have ',' at last even without key 
}



// JSON 


// {
//     "name":"age",   
//     "id ":1,
//     "mum":"383"
//     // Pnum:122
//     // ,
// }

// striong 
let k=[
    
    {
   "name":"parshu",
   "age":20,
   "skils":[10,2,30,40,],
   "addres":{
    "name":"prahu",
    "id":10,
    "zip":1018
   },
   "json":()=>{
    return 10;
   }

}

]

console.log(typeof k[0]);


//* what are restrted in JSON 
// 1  funtion () any from of function 
// 2    undefind meted
// 3    Date '10-1-2001'
// 4    ' , '   we cant have at end without teh key 

//! Converting Obj into JSON 
// in this we are convering the obj into String "becuause  json string in the form Steing "

//* JSON.stringify()
console.log("==============================================================================================================");
console.log("Normal Obj "+spp);
let Sout=JSON.stringify(spp) // return Steiung 
console.log("Convted Obj "+Sout);
console.log("Convted Obj type : "+typeof Sout);
console.log("Normal Obj :"+spp);  // we can see ist converte to string fornate But the //* tyope remian Obj only
console.log("Normal Obj type : "+typeof spp);

console.log("==============================================================================================================");
//! Converting JSON into  Obj
// we have string 
console.log(Sout);
console.log(typeof Sout);
let newObj =JSON.parse(Sout);
console.log(newObj);
console.log(typeof newObj);
console.log("==============================================================================================================");








