let imgbox = document.querySelector("#imgbox");
let qrImage = document.querySelector("#qrImage");
let qrtext = document.querySelector("#qrtext");
let button = document.querySelector("button")


function generateQR(){
    if(qrtext.value.length >0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
    }   
}

button.addEventListener("click",generateQR);
qrImage.style.display = "block";