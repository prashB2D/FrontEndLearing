// ~ CRUD 
//! CREATE 
//! step 1 
//   crete a elemnt which we want to add in the HTML
let create = document.getElementById("h1");
let c2=document.createElement("h2");  
//! step 2
// add the text in the elemnt which we want to add in the HTML
//* .innerText IS PROPERTY
create.innerText=" only text "; //  WHICH IS USED TO ADD THE TEXT IN THE ELEMNT
//* .innerHTML IS PROPERTY
c2.innerHTML="text with HTML <b>i am bold</b>"; //  WHICH IS USED TO ADD //? HTML elemnt also 

//! step 3
// append the elemnt in the HTML 
//* .appendChild() IS METHOD
// i need to acces the parent elemnt where i want to add the new elemnt
// i  will use DOM selecter 
let parent = document.getElementById("box");
parent.appendChild(c2);
c2.appendChild(create); 