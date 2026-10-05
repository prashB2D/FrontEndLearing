//  selecting elemnts by the id 

//* document

//* DOM 
// DOM is a tree structure of HTML elemnts where each elemnts is a node in the tree structure and we can access them by using DOM methods
// DOM is used Dynamically change the content of HTML elemnts

//* getElementById()
// return the elemnt by the "ID" 
// return only 1 elemnt //! 1st Node be found return "when they are mutoiple tag in the same ID name"
let p1=document.getElementById("demo1");
console.log(p1);

let p2=document.getElementById("demo2");  //* document is Gobel           
console.log(p2);                    // its and gobal variable soo  we can use this method without  document 


//* getElemntsByClass()
// will return all the elemnts to that class 
// mutiple elemts in the class so []//~ []
let c1=document.getElementsByClassName('demo');
console.log(c1);
let c2=document.getElementsByClassName('demo1');
console.log(c2);
let c3=document.getElementsByClassName('demo2');
console.log(c3);

//* getElementsByTagName()
// it will return all spcefed TAG in HTML 
// will return [] //~ []
let t1= document.getElementsByTagName('u')
let t2= document.getElementsByTagName('p')
let t3= document.getElementsByTagName('d')


//* querySelector()
// in this we can select any elemnts //? by  "ID" "CLASSNAME" "TAG"
let q=document.querySelector('');               // WE to diff them useing //*  '#' ->ID.  '.'-> class     <TAG>
                                                // if the same ID given to Mutiple teh 1st elemnt will be return Based on //* DOM TREE

//* querySelectorAll()
document.querySelectorAll()