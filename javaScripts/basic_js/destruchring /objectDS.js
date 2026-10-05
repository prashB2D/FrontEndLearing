//!   OBJ  DESTRUCHRING 



let St={
    name:"prashu",
    age:23,
    id:23,
    home:{
        hNum:1,
        hPin:201
    },
    coll:{
        cNum:1,
        cPin:201
    }
}
console.log(St);


// it works with  the key base not the postion 
//? NORMAL WAY 

let{name,age,id:ID,home}=St;
console.log(name);
console.log(age);
console.log("name change "+ID); // it shude be id  //* we cant chage the key Name But we can in 1 way let {Ogname: newName}
console.log(home);
console.log(home.hNum);
console.log(home.hPin);

//? for nested obj 
// let{name,age,ID,home,[cNum,pin]}=St; // this will not work 
let {home:{hNum,hPin}}=St;
console.log(hNum);
console.log(hPin);





