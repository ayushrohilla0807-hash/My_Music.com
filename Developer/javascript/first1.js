// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("you are inside div");
// }

let but = document.querySelector(".but");
let mode = "light";

but.addEventListener("mouseover",()=> {
  if (mode === "light"){
    mode = "dark";
   let body = document.querySelector("body");
   body.style.backgroundColor = "black";

  }
  else{
    mode = "light";

    let body = document.querySelector("body");
   body.style.backgroundColor = "white";
  }
  console.log(mode);
});