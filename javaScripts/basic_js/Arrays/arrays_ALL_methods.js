//Array is a collection of multiple data inside a variable and it can be homogeneous or heterogeneous

let arr = [1,2,3,4,5];

console.log(arr);
console.log(typeof arr);//array is of object type

let arr1 = [10,'a','b',15.5, true, function(){ console.log("Hello Array...!")}];//function-function[anonymous]
console.log(function(){ console.log("Hello Array...!")});
let zz=function(){ console.log("Hello Array...!")};
console.log(zz);
console.log(arr1);


//Array creation and methods

let arc=new Array(1,2,3,4,5);//Inserting value inside array during creation
console.log(arc);

let arc1=new Array(5);//Single value will create an array of that size
console.log(arc1);

console.log("length is : "+arr.length);//returns the count of elements in an array

let data = Array.from("Pavan");//It will convert the value into array if it is iterable. Here the String is iterable
console.log(data);//Static method

let data1 = Array.from({
    id:1,
    name:"Pavan"
})
console.log(data1);//Object is not iterable so it returns empty array

let str = "hello";
console.log("Array.isArray() : "+Array.isArray(str));//checkss if it is an array and returns boolean result-----static array method

let arf=Array.of(53,4,4,3,3);//it is used to add elements to an array and if we are passing single value also it will consider it as value inky not size
console.log("Array.of() : "+arf);//Static method

arr.push(6,7,8,9);//push is used to add the value to the end an array -pass values
console.log("push() : "+arr);

arr.pop();//used to remove an element from an array from thr last -no args
console.log("pop() : "+arr);

arr.shift();//removes element from the first -no arg
console.log("shift() : "+arr);

arr.unshift(9,8,7,6,"pavan");//adds element from the first -pass value
console.log("unshift() : "+arr);

console.log("slice() : "+arc.slice(1,3));//it is used to extract the elements from any array using indexes --returns new array
console.log("slice() : "+arc.slice(-3));//accepts negative indexing
console.log("slice() : "+arc.slice(4,2));//returns empty array

let splce=[1,2,3,4,5,6];
console.log("splice(start index, deletecount, add elements) -deleted : "+splce.splice(1,3,"Pavan",'Yahiko'));//modifies the origional array and returns deleted elements
console.log("splice() -modified array : "+splce);//prints the modified array

let conct= arf.concat(7,8,['SOul','Society']);
console.log("concat() : "+conct);//It always returns new array and it will add the elements 

console.log("reverse() : "+arr.reverse());//It will reverse an array and it will not return new array

console.log("join() : "+arr.join("_")+" -Typeof : "+typeof arr);//It will convert the array into string seprated by specific separator

console.log("indexOf() : "+arr.indexOf("pavan"));//It will return the index of first occourance of that element 

console.log("lastIndexOf() : "+arr.lastIndexOf(6));//It will traverse from last and returns the index  undex  of the element if present

console.log("includes() : "+arr.includes(5));//It will check weather the element is present or not , we can mention 

console.log("entries() : ")
for(let x of arr.entries())
{
    console.log(x);//It will provide key for each value in array
}

for(let x of arr.keys())
{
    console.log(x);//It will return keys of values 
}

for(let x of arr.values())
{
    console.log(x);//It will return values of array
}

let colors =  ['green','blue','black','red','yellow',102,30];
console.log("sort() : "+colors.sort());//It is used to sort the elements in ascending order

let num=[1,11,2,22,3,4,5,6];
console.log("sort() : "+num.sort());//Here it will convert num to string so the value is not compared correctly

console.log("sort() : "+num.sort((a,b) => a-b));//So we will use this method to sort the number

console.log("find() : "+num.find(num));