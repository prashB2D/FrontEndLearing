// find the 6 number hwich is grtes number using teh arry fucntion 

let re=(a,b,c,d,e,f)=>(a>b && a>c && a>d && a>e && a>f)?a:(b>c && b>d && b>e && b>f)?b:(c>d && c>e && c>f)?c:(d>e && d>f)?d:(e>f)?e:f;
console.log(re(10,2,132,23,54,33));


// sequer of a number
let re1=a=>a*a;
console.log(re1(2));

