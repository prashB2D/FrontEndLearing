console.log(React);
console.log(ReactDOM);
// element creation in react
//*  React.createElement( 1 , 2 , 3);
// 1 "element name"
// 2 {attribute name: "value"}
// 3 "innerText of the element"

let h1 = React.createElement("h1", { id: "id1",   }, "i am prashu");
// ^ we are incuded  h1 element to div "in div container"
let div = React.createElement("div", { id: "box" ,className: "box" , style: { backgroundColor: "red" } }, h1);
//  to add the class to the element // ~ className is used

// we will use ReactDOM.createRoot() method to access the parent element where we want to render the element
//* ReactDOM.createRoot( 1 )
// 1 "parent element"
let root =ReactDOM.createRoot(document.getElementsByTagName("body")[0]);


// we will use root.render() method to render the element in the HTML
//* root.render( 1 )
// 1 "element which we want to render in the HTML"
root.render(div);
