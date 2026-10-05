
// !                         Attribute Manipulation in JavaScript
//1  getAttribute("attribute name") 
//2  setAttribute("attribute name","value") 
//3  removeAttribute("attribute name") 
//4  hasAttribute("id");



//? Acces sing the attribute of the element using getAttribute() method
//*  getAttribute("attribute name") 


//* step 1 
// we need to select the elemnt which we want to update the attribute
let el= document.getElementsByTagName("img")[0];
//* step 2
// we need to use the getAttribute() method to get the attribute of the element
let atrubute = el.getAttribute("src");
console.log(atrubute+"  this is the atrubute of the elemnt");

//! what happenm when we try to get the attribute which is not present in the element
let atrubute1 = el.getAttribute("id");
console.log(atrubute1+"  this is the id of the element");  //^ null

//-----------------------------------------------------------------------------------------------------------------

//? setting the attribute of the element using setAttribute() method
//~ update    
//* setAttribute("attribute name","value") 


//* step 1
// we will select the elemnt which we want to update the attribute
let el1= document.getElementsByTagName("img")[1]; 
let newImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYP_CehFr3e8r2RiGpuZXGe_xIITprV-aS3N3I_P326g&s";

//* step 2
el1.setAttribute("src",newImage);  //^ setting the attribute of the element

//~   addnew  attribute
let el2= document.getElementsByTagName("img")[2]; 
el2.setAttribute("id","newImage");  //^ setting the id attribute of the element

//-----------------------------------------------------------------------------------------------------------------

//? removing the attribute of the element using removeAttribute() method
//* removeAttribute("attribute name") 


//* step 1
// we will select the elemnt which we want to remove the attribute
let el3= document.getElementsByTagName("img")[2];
//* step 2
el3.removeAttribute("id");  //^ removing the attribute of the element

//-----------------------------------------------------------------------------------------------------------------

//? check the attribute of the element using hasAttribute() method
// we have remiove the attribute of the element using removeAttribute() method
// we iwill check if the attribiute relly remioved or not 
let hasId = el3.hasAttribute("id");
console.log(hasId);  //^ false 
// as we have removed eleemnts 

