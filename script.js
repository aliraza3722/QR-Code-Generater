let imgbox = document.getElementById("imgbox");
let qrImg = document.getElementById("qrImg");
let inputText = document.getElementById("input-text");

function generateQR() {
    if(inputText.value.length > 0) {
   qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value ;
    }else {
        alert("First Enter Text Or URL.")
    }
}


document.getElementById("QRbtn").addEventListener("click", generateQR);
