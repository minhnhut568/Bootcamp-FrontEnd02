
// Demo disabled

var btnDisabled = document.getElementById("btnDisabled");
var txtDisabled = document.getElementById("txtDisabled");
var btnClickDisabled = document.getElementById("btnClickDisabled");



// btnClickDisabled.addEventListener("click", function () {
//     txtDisabled.disabled = true;
// });
// btnDisabled.addEventListener("click", function(){
//     txtDisabled.disabled = false;
// });

//Dung setAttribute()
txtDisabled.setAttribute("disabled", true);
btnClickDisabled.setAttribute("disabled", true);


var usr = document.getElementById("inputUsername");
var pass = document.getElementById("inputPassword");
var btn = document.getElementById("btnLogIn");
var annce = document.getElementById("announcement");

btn.addEventListener("click", function (event) {
    //Xu li su kien load lai trang do button co type submit
    event.preventDefault();
    var valUsr = usr.value;
    var valPass = pass.value;
    annce.innerHTML = "Customer's username: " + valUsr + "<br>" + "Password: " + valPass;
    annce.style.backgroundColor = "green";
    annce.style.color = "white";
    annce.style.marginTop = "20px";
    annce.style.padding = "10px";
});

var inpTotalAmount = document.getElementById("inpTotalAmount");
var selectPercentTip = document.getElementById("selectTip");
var numOfPeople = document.getElementById("numOfPeople");
var btnCal = document.getElementById("btnCal");
var annceOfTipCal = document.getElementById("annceOfTipCal");


btnCal.addEventListener("click", function () {
    var valInpTotalAmount = inpTotalAmount.value;
    var valSelectPercentTip = selectTip.value;
    var valNumOfPeople = numOfPeople.value;
    annceOfTipCal.style.color = "green";
    annceOfTipCal.style.marginTop = "20px";
    annceOfTipCal.innerHTML = "Tip amount per person:\n" + '<span style = "vertical-align: super;">$</span>'+ (valSelectPercentTip*valInpTotalAmount)/valNumOfPeople;

});

