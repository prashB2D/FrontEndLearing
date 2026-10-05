//!         creting  Promisss 
console.log("-------------------------------------------------------------------------------------------------");

let newpromiss = new Promise((reslove,reject)=>{
    (reslove,reject) // ^ any variabel but we have mentsin the order  1st 'reslove'
    let newpromiss = new Promise((reject,reslove)=>{

    //* reslove
     reject('Task not complited ');
    //  reslove('Task is complited ');  //^ this are not keywored okey. 'reject' , 'reject'

    //* reject
    // reslove('Task is complited ');
      reject('Task not complited ');
// * 1s any sate is mentioned we cant chage that stae back to other  res ->rej & rej -> res 'both cant'

})

newpromiss.then((res)=>{
    console.log(res);
    
}).catch((er)=>{
    console.log(er.message);
    
    console.log("error");
    
})

console.log("-------------------------------------------------------------------------------------------------");


//? CUNSTEM PROMIS FLOW
// the promiss work in the sync only we 


let flag=1;
                console.log(" 1st ");
let dumPromis = new Promise((yes,no)=>{
    if(flag==0){
         yes(" this will not triger the .catch() ")
                                        // * how will it know whihc is reject and which is resloved
                                        // 2nd is always is rejecte thata hy i am geing erreo
    }else if (flag==1){
        no(" this sate will trger the .catch() block ")
    }
    // }else{
    //     maybe(" we can give 2 or more") //* i am trying to givbe 3rd if it can ..??
    // }                                    // this will not work
   
                console.log(" 2nd ");
})
                console.log(" 3nd ");
dumPromis.then((item)=>{
                console.log(" 4th ");
    console.log(item);
                console.log(" 5nd ");
}).catch((mess)=>{
    console.log(mess);
    console.log(" this is cossong errro ");
                console.log(" 6th inside  ");
})
                console.log(" 6th out side  ");


//? Note
// the flow will work normal only a ssingle thred only no  1 by 1 the peomiss will be excuted 



console.log("-------------------------------------------------------------------------------------------------");


//? try memeic the atucla how  api works by dlaing teh state pass by the 
console.log(" aysic 1 ");

let newP = new Promise((r,rj)=>{
    let falge=true;
    // function call(flage){
    //     falge=falge;
    // }
    console.log(" aysic 2 ");
    setTimeout(()=>{
        console.log(" aysic  shude have be 3rd ");
        falge?r(" now u can see thr output "):rj(" get lost ")
        
    },4000)
    console.log(" 3rd");
    
})

    console.log(" 4th ");
newP.then((reps)=>{
    console.log(" shdue have been 5th  ");   //* then 
    console.log(reps);                       // will wiat tell i get the sate update from // promiss
                                            // promiss is in the wiate stae soo it will not work 
}).catch((er)=>{
console.log(er);
})
console.log(" 5th");           //? Note
                            // this will wornk in even they uper code is waiting .......
                            // becuse the then will wokr on //? async 


