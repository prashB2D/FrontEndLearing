//      types of function


// 1 named function 


// funation with return 
//--------------------------------------------------------------------------------------------------------------------------------


function PA(){
    // this function send back return to caller which is SA()
    return 18;
}
function SA(){
    // now this function call soo this become sencd caller 
   let c= PA();
    let a =190;
    let b =200;
    // this send the reusl to teh caller 
    return " the is resulat "+a+b+c;

    // as the thred is retuen to called this codwe will not. be excuated 
console.log(a,b,c,);

}
 // calling the function the main caller 
 console.log(SA());





 //---------------------------------------------------------------------------------------------------------------------------

 //2  anonames fucntioin 

 let faa =function(){
    console.log("faaaaaa 🔊");
    
 }
 faa();
 console.log(faa());


//   2  anonames fucntioin    with return 


  let faaa =function(){
    console.log("faaaaaa 🔊");
    return 10;
    
 }
 faaa();
  console.log(faaa());



  //---------------------------------------------------------------------------------------------------------------------------

  //   3   Arrow function

    //1 freacher of arrow function 
           // no need to use the function keywored
       let res= (a,b)=>{
        console.log(" i am teh 1st line code ");
         console.log(" i am teh 1st line code ");
         return a+b;
       }
      console.log(res());
      console.log(res(10,23));


    // 2nd feacher
       // if teh imaption is only line we dont we need the {}
       // if we ahve return and teh imapltion is only 1 liken we dont nee of teh return key wored also 
    let res1=(a,b)=> a+b ;
          console.log(res1());// guve NAN
          console.log(res1(10,23));

    
    // 3rd feachewr 
       // if we have only 1 variabled paremter we dint we need ()
    let res2= a=> a+100;
         console.log(res2());
             console.log(res2(12));
          console.log(res2(10,23)); // in this even they we are pasisng 2 parmter and it only need 1 paremt 
                                        // it will only selec t teh 1st parmter for teh passing arumgemt 

    // 4th feacher 
       // if the we dont have any paremter only we can use _ indte dof teh ()

    let res3 = _=>100+200;
          console.log(res3());
          console.log(res3(10,23));




          // ASS arry function using 
          // ord or eve
          let resQ=a=>(a%2==0)?"yes":"no";

          // grates of 3 num
          let resA=(a,b,c)=>(a>b && a>c)?a:(b>c)?b:c;

          //! of  the num
          let resS=n=>{
            let sum=1;
            for(let i=2;i<=n;i++){
                sum=sum*i;
            }
            return sum ;
          }
          console.log(resQ(10));
           console.log(resA(11,21,9));
            console.log(resS(3));
          
          
          
          




//---------------------------------------------------------------------------------------------------------------------------

//4 CALL BACK FUNCTION 

// the function which is passed  as the argumnet for another fiunction we say that function as call back function 


function party(per1 , per2 , partype){    //partype is teh vaibel which holds the function refrence send by caller
console.log(per1);
console.log(per2);
partype();

}

function homeP(){
   console.log(' home party ');  // random function 1 
   
}
function kityParty(){
   console.log("ist kerty party "); // random function 2
   
}
party("prasu ", "yahsu ",homeP ); // i am sending fucntion 1 as argumnet 

// function cal(num1 ,num2, op)=>op(num1,num2);
// function add(a,b)=>a+b;

// cal(10,12,add);



//---------------------------------------------------------------------------------------------------------------------------


//5 HIGER ORDER FUNCTION

// THE FUNCTION WHICH ACCPTES FUCNTION AS TEH PARAMTER IS CALLED HIGER ORDER FUNCTION 

function parent(k){
   console.log(" i am the parent ");
   k()
   
}
parent(function yungChild(){
   console.log(" i am the child ");
   
})

parent(let midChild=_=>console.log(" i am the midel child"))
// Why it fails: You cannot declare a variable (let, const, or var) inside function arguments.

parent(()=>console.log(" i am the midel child"))



 parent(console.log(" i am gost"));



 //---------------------------------------------------------------------------------------------------------------------------

 function hotail(name , menuType,DineIn){
   console.log(" well come sir "+name+"  😁 ");
   menuType(DineIn)
   
   
 }

 let nonVeg=(task)=>{
   console.log(".......");
    console.log("  we have ");
      console.log("  birnay ");  console.log("  butter checken ");  console.log("  thanduri ");
      task()
   
 }
 let Veg=(task)=>{
   console.log(".......");
    console.log("  we have ");
      console.log(" veg birnay ");  console.log("  butter masurum ");  console.log("  panner thanduri ");
      task()
   
 }

 function takeway(){
    console.log(".......");
    console.log("  you order will paked in sec  ");
    console.log(".......");
    console.log("  you food is pakked thanku");
 }


//  hotail("prashu",nonVeg);   // this will throw  error becuause we need to pass somthing in Funtion 
                           // its not like number if nuymber is passwd it wil atk as zero in funtion we need pass 
 hotail("prashu",nonVeg,takeway);














    
    


       

 
