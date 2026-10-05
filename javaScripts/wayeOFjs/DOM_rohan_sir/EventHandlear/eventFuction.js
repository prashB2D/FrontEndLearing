function duum (){
  
    alert(" yoooo")
}

let b=function dum (){
    // console.log(" yoooo yoooo");
     alert(" yoooo yoooo")
}


//! Hnadeling event by dom 
let el =document.getElementById("myButton")
el.onclick()= function(){
    alert(" yoooo")
}

//! Hnadeling event by dom
// el.setAttributeNS(null, "onclick", "duum()");  //^ set the event in the elemnt using setAttributeNS() method


//! Hnadeling event by dom

let el2 =document.getElementById("myButton2")
el2.addEventListener("click",duum);  //^ set the event in the elemnt using addEventListener() method