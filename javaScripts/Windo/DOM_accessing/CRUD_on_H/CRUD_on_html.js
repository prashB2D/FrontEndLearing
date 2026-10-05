// ~ CRUD 
//! CREATE 
//! step 1 
//   crete a elemnt which we want to add in the HTML
let c1 = document.createElement("h1");
let c2=document.createElement("h2");  
//! step 2
// add the text in the elemnt which we want to add in the HTML
//* .innerText IS PROPERTY
c1.innerText=" only text "; //  WHICH IS USED TO ADD THE TEXT IN THE ELEMNT
//* .innerHTML IS PROPERTY
c2.innerHTML="text with HTML <b>i am bold</b>"; //  WHICH IS USED TO ADD //? HTML elemnt also 

//! step 3
// append the elemnt in the HTML 
//* .appendChild() IS METHOD
// i need to acces the parent elemnt where i want to add the new elemnt
// i  will use DOM selecter 
let parent = document.getElementById("box");
parent.appendChild(c1);
c1.appendChild(c2); 
//* .append()
// applend() is method which is used to add the elemnt in the HTML
// it will add the elemnt in the last of the parent elemnt 
//? can add mutiple elemnts in the parent elemnt
parent.append(c1);



//& UPDATE
//! step 1
//^UPDATE CONTENET OF THE ELEMNT
            //i need to acces the elemnt which i want to update
            // we have alreay have c1 and c2
//* .inn2rText IS PROPERTY
c1.innerText=" only text "; //  WHICH IS USED TO ADD THE TEXT IN THE ELEMNT
//* .innerHTML IS PROPERTY
c2.innerHTML="text with HTML <b>i am bold</b>"; //  WHICH IS USED TO ADD //? HTML elemnt also 

//^ UPDATE ATTRIBUTES OF THE ELEMNT
