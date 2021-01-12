
// var inpName = document.getElementById("inpName");
// var inpAmount = document.getElementById("inpAmount");
// var inpPrice = document.getElementById("inpPrice");
// var btnCal1 = document.getElementById("btnCal1");
// var inpName = document.getElementById("inpName");


// btnCal1.addEventListener("click", function () {
//     var valInpName = inpName.value;
//     var valInpAmount = inpAmount.value;
//     var valInpPrice = inpPrice.value;
//     var valInpName = inpName.value;

//     if (valInpAmount >= 100) {

//         nameOfProduct.innerHTML = valInpName;
//         payment.innerHTML = "Payment = " + Number(49*valInpPrice + 50*0.92*valInpPrice + (valInpAmount-49-50)*0.88*valInpPrice);

//     } else if (valInpAmount >= 50 && valInpAmount < 100) {

//         nameOfProduct.innerHTML = valInpName;
//         payment.innerHTML = "Payment = " + Number(49*valInpPrice + (valInpAmount-49)*0.92*valInpPrice);

//     } else if (valInpAmount >0 && valInpAmount < 50) {

//         nameOfProduct.innerHTML = valInpName;
//         payment.innerHTML = "Payment = " + valInpAmount * valInpPrice;

//     } else {

//         payment.innerHTML = "You did not buy anything!!!";

//     }

// });



//BAI TAI JS BUOI 4
//BT1
var inpNum1 = document.getElementById("inpNum1");
var inpNum2 = document.getElementById("inpNum2");
var inpNum3 = document.getElementById("inpNum3");
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var btnCalEx1 = document.getElementById("btnCalEx1");

btnCalEx1.addEventListener("click", function () {
    var valNum1 = inpNum1.value;
    var valNum2 = inpNum2.value;
    var valNum3 = inpNum3.value;
    var min = 0;

    min = (valNum1 < valNum2 && valNum1 < valNum3) ? valNum1 : (valNum2 < valNum3 ? valNum2 : valNum3);
    s1.innerHTML = min;

    if (valNum1 == min) {
        s2.innerHTML = valNum2 < valNum3 ? valNum2 : valNum3;
        s3.innerHTML = valNum2 > valNum3 ? valNum2 : valNum3;
    } else if (valNum2 == min) {
        s2.innerHTML = valNum1 < valNum3 ? valNum1 : valNum3;
        s3.innerHTML = valNum1 > valNum3 ? valNum1 : valNum3;
    } else {
        s2.innerHTML = valNum1 < valNum2 ? valNum1 : valNum2;
        s3.innerHTML = valNum1 > valNum2 ? valNum1 : valNum2;
    }

});

//BT2
var inpBMAE = document.getElementById("inpBMAE");
var btnCalEx2 = document.getElementById("btnCalEx2");
var greeting1 = document.getElementById("greeting1");
var greeting2 = document.getElementById("greeting2");
var greeting3 = document.getElementById("greeting3");
var greeting4 = document.getElementById("greeting4");

btnCalEx2.addEventListener("click", function () {
    var valBMAE = inpBMAE.value;

    if (valBMAE == "B" || valBMAE == "b") {
        greeting1.innerHTML = greeting2.innerHTML = greeting3.innerHTML = greeting4.innerHTML = "";
        greeting1.innerHTML = "Anh chào em  !";
        greeting2.innerHTML = "Bố chào 2 con !";
        greeting1.style.color = "Green";
        greeting2.style.color = "Green";
    } else if (valBMAE == "M" || valBMAE == "m") {
        greeting1.innerHTML = greeting2.innerHTML = greeting3.innerHTML = greeting4.innerHTML = "";
        greeting1.innerHTML = "Em chào anh  !";
        greeting2.innerHTML = "Mẹ chào 2 con !";
        greeting1.style.color = "Green";
        greeting2.style.color = "Green";
    } else if (valBMAE == "A" || valBMAE == "a") {
        greeting1.innerHTML = greeting2.innerHTML = greeting3.innerHTML = greeting4.innerHTML = "";
        greeting1.innerHTML = "Con chào bố  !";
        greeting2.innerHTML = "Con chào mẹ !";
        greeting3.innerHTML = "Anh chào em !";
        greeting1.style.color = "Green";
        greeting2.style.color = "Green";
        greeting3.style.color = "Green";
    } else if (valBMAE == "E" || valBMAE == "e") {
        greeting1.innerHTML = greeting2.innerHTML = greeting3.innerHTML = greeting4.innerHTML = "";
        greeting1.innerHTML = "Con chào bố  !";
        greeting2.innerHTML = "Con chào mẹ !";
        greeting3.innerHTML = "Em chào anh !";
        greeting1.style.color = "Green";
        greeting2.style.color = "Green";
        greeting3.style.color = "Green";
    } else {
        greeting1.innerHTML = greeting2.innerHTML = greeting3.innerHTML = "";
        greeting4.innerHTML = "Please type carefully again! You only have 4 selections"
        greeting4.style.color = "Red";
    }
});


//BT3
var inpNum1_BT3 = document.getElementById("inpNum1_BT3");
var inpNum2_BT3 = document.getElementById("inpNum2_BT3");
var inpNum3_BT3 = document.getElementById("inpNum3_BT3");
var btnCalEx3 = document.getElementById("btnCalEx3");
var even = document.getElementById("even");
var odd = document.getElementById("odd");

btnCalEx3.addEventListener("click", function () {
    var valNum1_BT3 = inpNum1_BT3.value;
    var valNum2_BT3 = inpNum2_BT3.value;
    var valNum3_BT3 = inpNum3_BT3.value;
    var count = 0;

    if (!(valNum1_BT3 % 2)) count++;
    if (!(valNum2_BT3 % 2)) count++;
    if (!(valNum3_BT3 % 2)) count++;


    even.innerHTML = "Amount of Even Number is: " + count;
    odd.innerHTML = "Amount of Odd Number is: " + Number(3 - count);

});

//BT4
var inpAngle1 = document.getElementById("inpAngle1");
var inpAngle2 = document.getElementById("inpAngle2");
var inpAngle3 = document.getElementById("inpAngle3");
var btnCalEx4 = document.getElementById("btnCalEx4");
var triangle = document.getElementById("triangle");

btnCalEx4.addEventListener("click", function () {
    var valAngle1 = inpAngle1.value;
    var valAngle2 = inpAngle2.value;
    var valAngle3 = inpAngle3.value;

    if ((valAngle1 < Number(valAngle2 + valAngle3)) && (valAngle2 < Number(valAngle1 + valAngle3)) && (valAngle3 < Number(valAngle1 + valAngle2))) {
        if ((valAngle1 * valAngle1) == Number((valAngle2 * valAngle2) + (valAngle3 * valAngle3)) || (valAngle2 * valAngle2) == Number((valAngle1 * valAngle1) + (valAngle3 * valAngle3)) || (valAngle3 * valAngle3) == Number(valAngle1 * valAngle1 + valAngle2 * valAngle2))
            triangle.innerHTML = "Right-angled Triangle";
        else if (valAngle1 == valAngle2 && valAngle2 == valAngle3)
            triangle.innerHTML = "Equilateral Triangle";
        else if (valAngle1 == valAngle2 || valAngle1 == valAngle3 || valAngle2 == valAngle3)
            triangle.innerHTML = "Isosceles Triangle";
        else if ((valAngle1 * valAngle1) > (valAngle2 * valAngle2 + valAngle3 * valAngle3) || (valAngle2 * valAngle2) > (valAngle1 * valAngle1 + valAngle3 * valAngle3) || (valAngle3 * valAngle3) > (valAngle1 * valAngle1 + valAngle2 * valAngle2))
            triangle.innerHTML = "Obtuse Triangle";
        else triangle.innerHTML = "Acute Triangle";
    } else triangle.innerHTML = "3 angles are not the triagle's angle !";

});