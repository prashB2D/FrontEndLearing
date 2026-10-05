
//                      condational Operators
 console.log(".             condational Operators                      ");

let wDrow=1000;
let blance= 600;
blance=blance>=wDrow? blance-wDrow :"error !!! blance is less";
console.log(blance);


//    small operation 
let aa =3;
let bb=4;
let cc =1;
console.log((aa>bb && aa>cc)? aa  :(bb>aa && bb>cc)? bb: cc );


//                   desisesion stement 

// if  and else
let hunnger=true;
if(hunnger){
    console.log(" I had food, I am not hunggery ,you know what  1 sweet hud bee good");
}else{
    console.log(" char din se bhuka hu kuch to de maa");
}

// if else lader 
let seelingPrice=100;
let askigPrice=10;
if(seelingPrice<=askigPrice){
    console.log("i wil sell to u only ");
    
}else if(seelingPrice-10<=askigPrice){
  console.log("i need littel more  ");
}else{
      console.log("f off ");
}


// swithch

let homeID=3;
switch(homeID){
    case 1:
        console.log(" thi is ur home ");
        break;
    case 3:
        console.log(" thi is ur home mu chile ");
        break;
    case 2:
        console.log("did u forgot ur home thi is ur home ");
        break;
    default:
        console.log("ur home less kid"); 
}


