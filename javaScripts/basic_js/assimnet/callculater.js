function call(num1, num2, op) {
    // return op(num1, num2);
    console.log(op(num1, num2));
    
}

function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function div(a, b) {
    return a / b;
}
function rem(a,b){
    return a%b;
}
let seq=(a,b)=>a*b;

call(10,12,add);
call(10,12,sub);
call(10,12,div);
call(10,12,rem);
call(10,12,seq);
