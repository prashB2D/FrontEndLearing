// let api = 'https://fakestoreapi.com/users';
// let res =fetch(api).then((def)=>{
//    return  def.json();


// })
// console.log(res);
// let k =res.then((data)=>{
//     return  data;
//     // console.log(data);

// })
// console.log(k);






// res.json().then((data)=>{
//     console.log(data);

// });


// let uData =fetch(url).then((data)=>{
//     return data ;
// })
// console.log(JSON(data));


// async function dumFun(){
// let uRead =await fetch("https://fakestoreapi.com/products");
// let read = await uRead.json();
// console.log(read);
// }
// dumFun();





// async function dumFun(){

//     try{
//         let uRead =await fetch("https://fakestoreapi.com/products");
//         let read = await uRead.json();
//         // let [{title},{rating}]=read;
//        read.map((data)=>{
//         let {title,rating}=data;
//         console.log(title);
//         console.log(rating.rate);

//        })

//         // console.log();

//         // console.log(read);
//     }catch(er){
//         console.log(er.message);
//         console.log("My own message"); 
//     }finally{
//         console.log(" i am hear "); 
//     }
// }
// dumFun();




// let data=[{name:'yash',age:20} ,{name:'prashu',age:21}];

// data.map((it)=>{
//      console.log();
//     console.log("USE NAME IS :"+ it.name);
//      console.log(" USE AGE IS :"+it.age);
//     console.log();
//     console.log(" 2nd way custem name");
//     let { name: personName, age: personAge } = it;

//     console.log(personAge +" age");
//     console.log(personName +" name");

// })

// data.map(({name,age})=>{
//     console.log(name );
//     console.log(age );

// })

//--------------------------------------------------------------------------

// //? CUNSTEM PROMIS FLOW
// let newP = new Promise((r,rj)=>{
//     let falgeo=false;
//     // function call(flage){
//     //     falgeo=falge;
//     // }
//     setTimeout(()=>{
//         //
//         falgeo?r(" payments is susses "):rj(" get lost wrong  ")

//     },4000)
// })

// // console.log(newP);

// newP.then((reps)=>{
// //    call(true); 

//     console.log(reps);
// }).catch((er)=>{
// console.log(er);
// })


// 

// let sample = {
//     "status": "Awesome! You have reached dummy JSON APIs. Go to https://beeceptor.com/mock-server/json-placeholder and find the request paths you want to use. If you are using trailing slashes and this came up, please remove those to see the actual response.",
//     "paths": [
//         "https://json-placeholder.mock.beeceptor.com/posts",
//         "https://json-placeholder.mock.beeceptor.com/posts/1",
//         "https://json-placeholder.mock.beeceptor.com/comments",
//         "https://json-placeholder.mock.beeceptor.com/comments/1",
//         "https://json-placeholder.mock.beeceptor.com/companies",
//         "https://json-placeholder.mock.beeceptor.com/companies/1",
//         "https://json-placeholder.mock.beeceptor.com/users",
//         "https://json-placeholder.mock.beeceptor.com/users/1",
//         "https://json-placeholder.mock.beeceptor.com/roles",
//         "https://json-placeholder.mock.beeceptor.com/roles/1",
//         "https://json-placeholder.mock.beeceptor.com/todos",
//         "https://json-placeholder.mock.beeceptor.com/todos/1",
//         "https://json-placeholder.mock.beeceptor.com/login"
//     ]
// }
//  async function name() {
// sample.paths.map(async (apis) => {
//     // console.log(apis);
   
//         try {
//             let unReadData = await fetch(apis)
//             let read = await unReadData.json()
//             console.log(read);
            
//         } catch (err) {
//             console.log("api is not working ");

//         } finally {
//             console.log(" jsut for use i am using ");

//         }

// })
// }
// name();

// !  type 2

let api ="https://json-placeholder.mock.beeceptor.com/posts/1";
 let uread = fetch(api).then((va)=>{
    return va.json();
 });

 console.log(uread);
 // as the josn also  giving me pending sate we have  to use 1s mopre then 
 
uread.then((v)=>{

    console.log( v.userId);
     console.log( v.title);
    
})
