// Demo tim the bang id

var inputUser = "";
var inputPass = "";

inputUser = document.getElementById("username");
inputPass = document.getElementById("password");

console.log(inputUser);
console.log(inputPass);

var valUser = inputUser.value;
var valPass = inputPass.value;
console.log(valUser);
console.log(valPass);

// Lay ten class
console.log(inputUser.className);
var txt = document.getElementById("text");
var btn = document.getElementById("btnClick");
console.log(txt, btn);

//Them su kien click cho button

// Cach 1: Su dung onclick cua js
// btn.onclick = function () {
//     // doi noi dung the
//     txt.innerHTML = "Da doi noi dung !!!";
// }

// Cach 2: Su dung addEventListener
btn.addEventListener("click", function(){
    txt.innerHTML = "Da doi noi dung !!!";
    txt.style.color = "red";
    txt.style.backgroundColor = "yellow";
});

//Demo lam mo
var divNoiDung = document.getElementById("divNoiDung");
document.getElementById("btnLamMo").addEventListener("click",function(){
    // Cach 1: Su dung style, chi them code, ko xoa style cu
    // divNoiDung.style.opacity = "0.5";
    // divNoiDung.style.color = "white";
    // divNoiDung.style.border = "1px solid green";
    // divNoiDung.style.marginBottom = "20px";
    // divNoiDung.style.transition = "all 0.5s";

    // Cach 2: Su dung cssText
    // divNoiDung.style.cssText = "opacity:0.5; color:yellow"

    // Cach 3: Them class vao the html, khong xoa class cu
    divNoiDung.classList.add("classLamMo");
    // divNoiDung.classList.remove("classLamMo");
});

document.getElementById("btnBat").addEventListener("click", function(){
    document.getElementById("img").src = "./img/pic_bulbon.gif";
});
document.getElementById("btnTat").addEventListener("click", function(){
    document.getElementById("img").src = "./img/pic_bulboff.gif";
});


