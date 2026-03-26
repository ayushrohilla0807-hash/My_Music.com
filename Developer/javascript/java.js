// let print = (a,b) => {
//    return a*b;
// }

// print(9,2)


// arr = [1,2,3,4,5];

// arr.forEach((val,idx) =>{
//    console.log(val,idx);
// });

// let n = prompt("Enter your n:");
// console.log(n);

// arr = [1];
// for(let i=1;i<n;i++){
//   arr.push(i+1);
// }
// for (let i=0;i<arr.length;i++){
//    console.log(arr[i]);
// }
// const result = arr.reduce((prev,curr) =>{
//       return prev * curr;
//    });

// console.log(result);

//alert("open all");
// let divs = document.querySelectorAll(".box");
// console.log(divs);

// const student = {
//     fullname: "shradha ",
//     marks : 92,
//     printmarks (){
//         console.log("marks = ", this.marks);

//     },
// };

// employee = { 
//     mark : 65,
//     emp(){    
//     console.log("this is emp");
//     },
// };

// employee.__proto__ = student;

// class college{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//      }

//      viewdata(){
//         console.log("name = ",this.name,"  ","email ",this.email);
//      }

// }

// class admin extends college{
//    constructor(name,email){
//       super(name,email);
//    }
//    editdata(){
//       data = "some now valaue"
//    }

// }

// let student = new college("Ayush" , "ijfoj@ijf");
// let Admin = new admin("nitin","nitin@gmail");

// function hello(){
//    console.log("hello");
// }
// setTimeout(hello,4000);

// function getdata(dataid, next){
//    setTimeout(()=>{
//       console.log("data" , dataid);
//       if(next){
//          next();
//       }
//    },3000);
// }

// getdata(23,()=>{
//    getdata(2, ()=>{
//       getdata(3)
//    });
// });

// function asyncFunc1(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          console.log("data1" );
//          resolve("success")
//       },3000);
//    });
   
// }

// function asyncFunc2(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          console.log("data2" );
//          resolve("success")
//       },3000);
//    });
   
// }

// console.log("fetching data1.. ");
// asyncFunc1().then((res)=>{
//    console.log("fetching data2... ");
//    asyncFunc2().then((res)=>{});
// });

const URL= "https://catfact.ninja/fact";
const parag = document.querySelector("#para");
const button = document.querySelector(".but");
const getfact = async () =>{
   console.log("getting data ");
   let response = await fetch(URL);
   console.log(response);
   let data = await response.json();
   parag.innerText = data.fact;
};

button.addEventListener("click", getfact)