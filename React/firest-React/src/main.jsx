// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import React from "react";
import { Fragment } from "react"; //?  2 we are destring  soo we dont need to call the every time React.Fragment
import ReactDOM from "react-dom/client"
//! roules of JSX 
// * 1 jsx must have 1 parent element
// becuse the jsx works as functio and we know 
// the function can retune 1 value soo 
// we bind the mutipl elemnts to 1 parmnet elemts
let h1 = <div>
    <h1> hello i ma parshu</h1>
    <h1> yashu</h1>
    <h1>  2+6 </h1>
</div>


// * 2 the closing elmnts of jsx must be flowed with "/" ist complasery 
// * 3 if i wnat to emend the JS code insid i eed witer the JS code in {} 
//^ writing JS code insde the JSX
// ^ assment 
let h1 = <div>
    <h1>{(true ? <h1>yes</h1> : <h1>no</h1>)}</h1>
</div>
//* 4 camelCase
// any <attrubute> html,css  attrubute name shdue be flowing teh camelCase rule
//& camekCase -> smallBing 
// 1st wored will be in samller case 2nd wored 1st latter will be in capital case


// * 5 class->className
// in jsx the class attrubute is chganeed to//^ className

// * 6 for->htmlFor
// in fom we use 'for' to link the input section  with label section 
// in jxs we use //^ htmlFor


// * 7 pascalCase rule
// when we are creting file "componate" in Rect 
// the file name shude fllow pascalCase rule


// ! React Fragments 
//*  <React.Fragment> eles </React.Fragment>
// which alow us to write enben mutipl elemnts without using any parent rlation 
// elemnating roule 1
let fg = <React.Fragment>
    <h1>i am single </h1>
    <h1>elemnts exits without any parents</h1>
</React.Fragment>

//? now ist to long to use <React.Fragment>
//* <Fragment> els </Fragment>
// when we are importing we can destration onlu to Fragment
import { Fragment } from 'react'
// so now we dont need to use Rect. becuase  we are exreating Fragment form Rect
let ex = <Fragment>
    <h1> we sre using thsi with out ansy peobelm </h1>
    <h1> we sre using thsi with out ansy peobelm </h1>
    <h1> we sre using thsi with out ansy peobelm </h1>
</Fragment>


//? now we have even shorter version of thiss
// this is called //* sugger corets <> else </>
// in thsi we dont need to import the react also 
//^ will not create extra node (div)
let stFg = <>
    <h1>i am single </h1>
    <h1>elemnts exits without any parents</h1>
</>


//^ we can only use 1 render per file 
// 1 file 1 retuen 1 elemts (whihc we greup tehn ot gether using framnet or iother thing and render them togethor)
// ^  1 (group elements) 2 (render)
ReactDOM.createRoot(document.getElementById("root")).render(stFg);
ReactDOM.createRoot(document.getElementById("root")).render(fg); //& @override stFg
ReactDOM.createRoot(document.getElementById("root")).render(h1); //& @override stFg , fg


