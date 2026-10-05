// obj is a progrical repration if the realwored enity

let Student={
    name:"prashu",  // property  comnation of the //* key and value
    lastName:"rs",   // internaly teh key is stored in the form of "STRING"
    id:23,           
    k:[1,32,4,4,3],
//   *:10           spical char is not allowed as key 
    "*":10

}
console.log(Student);

//! whay's of accesing the element


let st={
    name:"prashu",  
    lastName:"rs",
    id:23,
    k:[1,32,4,4,3],
    1:10

}
// 1  by  //*    . 
console.log(st.name);
console.log(st.lastName);
console.log(st.id);
console.log(st.k);
console.log(st.k[2]);

// 2 by //*     []
// console.log(st[name]);
// console.log("can only acces 1 elemnet "+st['name','lastName','id']);
console.log("Name "+st["name"]);
console.log("ID "+st['id']);

//  Diff in the  //?   '.'  and '[]'
//?  '.'
// there some limation to thi sapporuch 
// 1 we cant call teh key whuch have space in them    firest name. uisng . 
// 2  if teh key is in the from of the SPICAL CHAR we canty acces tehme using   .
// 3 dnamic acceisng i snot there in the this
// 4 i dteh key is number we cany acces 


// ? '[]'
// this sloves thoes problems of '.'
// .Name we are replaceing with []==.    and name inside 
        //* ref["name"] == ref.name

console.log("[ ] "+st["name"]);
console.log("[ ] "+st["k"][2]);




// more ob obj 
// array insdie teh function
let st1={
      name:"prashu",  
    lastName:"rs",
    id:23,
    k:[1,32,4,4,3],
    1:10,
    
}
console.log(st1.k[1]);
console.log(['st1'][1]); // [][index]



// function insdie teh obj 
let st2={
      name:"prashu",  
    lastName:"rs",
    id:23,
    k:[1,32,4,4,3],
    1:10,
    p1Function: z=((v) => v + " fucntion "),

    p2Function: function p1rint() {
        console.log(" named fucntion is called ");
        return 10; // if we dont give teh retuen it wil atke it as teh //* undefiend
    },
    p3Function: function(){
        console.log(" anonames fucntion is called ");
        return 10;

    }

}
console.log("function "+st2.p1Function);
console.log(st2.p2Function());

st2["p2Function"]();
console.log(st2["p2Function"]());




// obj inside a obj 
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
// accesing obj inside teh obj 
console.log("accesing nested obj destila : "+st3.homeDetais.hName);

console.log(st3["homeDetais"]["hNum"]);








//%  acceing the nested ibj uisng [] all 






