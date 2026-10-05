let img= document.createElement("img");

img.setAttribute("src","https://static.toiimg.com/thumb/msid-109304275,width-1280,height-720,resizemode-4/109304275.jpg");
img.setAttribute("alt","404");

let body= document.body;
body.style.width="100%";
body.style.height="100%";

img.style.position="center";
img.style.width="500px";
img.style.height="500px";

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";
document.body.style.margin = "0";

// img.style.backgroundRepeat="repeat-x";
// img.style.backgroundSize="cover";
// img.style.background-position= "center center";
document.body.appendChild(img);

