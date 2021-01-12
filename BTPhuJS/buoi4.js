
//BAI TAP PHU 
//BT1
var inpDate = document.getElementById("inpDate");
var inpMonth = document.getElementById("inpMonth");
var inpYear = document.getElementById("inpYear");
var btnDate = document.getElementById("btnDate");
var showDate = document.getElementById("showDate");

btnDate.addEventListener("click", function () {
    var valDate = inpDate.value;
    var valMonth = inpMonth.value;
    var valYear = inpYear.value;

    //Xoa thong bao cu
    showDate.innerHTML = "";

    //Kiem tra ngay roi xuat thog bao sai
    if (valMonth == 1 || valMonth == 3 || valMonth == 5 || valMonth == 7 || valMonth == 8 || valMonth == 10) {
        if (!(valDate > 0 && valDate <= 31)) showDate.innerHTML = "Wrong format !!!";
    } else if (valMonth == 2) {
        if (!(valDate > 0 && valDate <= 29)) showDate.innerHTML = "Wrong format !!!";
    } else if (!(valDate > 0 && valDate <= 30)) showDate.innerHTML = "Wrong format !!!";


    //Neu ngay dung thi tinh roi xuat lai thong bao dung
    if (showDate.innerHTML != "Wrong format !!!") {
        if (valMonth == 1 || valMonth == 3 || valMonth == 5 || valMonth == 7 || valMonth == 8 || valMonth == 10) {
            if (valDate != 31) valDate++;
            else {
                valDate = 1;
                valMonth++;
            }
        } else if (valMonth == 2) {
            if (valDate != 29) valDate++;
            else {
                valDate = 1;
                valMonth++;
            }
        } else if (valMonth == 12) {
            if (valDate != 31) valDate++;
            else {
                valDate = 1;
                valMonth = 1;
                valYear++;
            }
        } else {
            valDate++;
            valMonth++;
        }
        showDate.innerHTML = valDate + "/" + valMonth + "/" + valYear;
    }

});

//BT2
var inpDate_BT2 = document.getElementById("inpDate_BT2");
var inpMonth_BT2 = document.getElementById("inpMonth_BT2");
var inpYear_BT2 = document.getElementById("inpYear_BT2");
var btnDate_BT2 = document.getElementById("btnDate_BT2");
var showDate_BT2 = document.getElementById("showDate_BT2");

btnDate_BT2.addEventListener("click", function () {
    var valDate_BT2 = inpDate_BT2.value;
    var valMonth_BT2 = inpMonth_BT2.value;
    var valYear_BT2 = inpYear_BT2.value;

    //Xoa thong bao cu
    showDate_BT2.innerHTML = "";

    //Kiem tra ngay roi xuat thog bao sai
    if (valMonth_BT2 == 1 || valMonth_BT2 == 3 || valMonth_BT2 == 5 || valMonth_BT2 == 7 || valMonth_BT2 == 8 || valMonth_BT2 == 10 || valMonth_BT2 == 12) {
        if (!(valDate_BT2 > 0 && valDate_BT2 <= 31)) showDate_BT2.innerHTML = "Wrong format !!!";
    } else if (valMonth_BT2 == 2) {
        if (!(valDate_BT2 > 0 && valDate_BT2 <= 29)) showDate_BT2.innerHTML = "Wrong format !!!";
    } else if (!(valDate_BT2 > 0 && valDate_BT2 <= 30)) showDate_BT2.innerHTML = "Wrong format !!!";


    //Neu ngay dung thi tinh roi xuat lai thong bao dung
    if (showDate.innerHTML != "Wrong format !!!") {
        if (valMonth_BT2 == 1 || valMonth_BT2 == 3 || valMonth_BT2 == 5 || valMonth_BT2 == 7 || valMonth_BT2 == 8 || valMonth_BT2 == 10 || valMonth_BT2 == 12) {
            showDate_BT2.innerHTML = "31 DAYS";
        } else if (valMonth_BT2 == 2) {
            if ((Number(valYear_BT2 % 4) == 0) && (Number(valYear_BT2 % 100) != 0) || (Number(valYear_BT2 % 400) == 0)) showDate_BT2.innerHTML = "29 DAYS";
            else showDate_BT2.innerHTML = "28 DAYS";
        } else if (valMonth_BT2 == 4 || valMonth_BT2 == 6 || valMonth_BT2 == 8 || valMonth_BT2 == 9 || valMonth_BT2 == 11) showDate_BT2.innerHTML = "30 DAYS";
        else if (valDate_BT2 == 0 || valMonth_BT2 == 0) showDate_BT2.innerHTML = "Wrong format !!!";
    }
});


//BT3
var inpNum_BT3 = document.getElementById("inpNum_BT3");
var btn_BT3 = document.getElementById("btn_BT3");
var show1 = document.getElementById("show1");
var show2 = document.getElementById("show2");
var show3 = document.getElementById("show3");

btn_BT3.addEventListener("click", function () {
    var valNum_BT3 = inpNum_BT3.value;
    var hundreds = 0, tens = 0, units = 0, tenUnit = 0; //tenUnit: So khi da bo hang tram

    hundreds = Math.floor(valNum_BT3 / 100);
    tens = Math.floor((valNum_BT3 % 100) / 10);
    units = (valNum_BT3 % 100) % 10;
    tenUnit = valNum_BT3 % 100;

    show1.innerHTML = "";
    show2.innerHTML = "";
    show3.innerHTML = "";

    if (hundreds == 1) show1.innerHTML = "One hundred";
    else if (hundreds == 2) show1.innerHTML = "Two hundred";
    else if (hundreds == 3) show1.innerHTML = "Three hundred";
    else if (hundreds == 4) show1.innerHTML = "Four hundred";
    else if (hundreds == 5) show1.innerHTML = "Five hundred";
    else if (hundreds == 6) show1.innerHTML = "Six hundred";
    else if (hundreds == 7) show1.innerHTML = "Seven hundred";
    else if (hundreds == 8) show1.innerHTML = "Eight hundred";
    else if (hundreds == 9) show1.innerHTML = "Nine hundred";

    if (tens == 1) {
        if (units == 0) {
            show2.innerHTML = " and Ten";
        } else {
            if (tenUnit == 11) show2.innerHTML = " and Eleven";
            else if (tenUnit == 12) show2.innerHTML = " and Twelve";
            else if (tenUnit == 13) show2.innerHTML = " and Thirteen";
            else if (tenUnit == 14) show2.innerHTML = " and Fourteen";
            else if (tenUnit == 15) show2.innerHTML = " and Fifteen";
            else if (tenUnit == 16) show2.innerHTML = " and Sixteen";
            else if (tenUnit == 17) show2.innerHTML = " and Seventeen";
            else if (tenUnit == 18) show2.innerHTML = " and Eighteen";
            else if (tenUnit == 19) show2.innerHTML = " and Nineteen";
        }
    } else if (tens == 2) show2.innerHTML = " Twenty";
    else if (tens == 3) show2.innerHTML = " Thirty";
    else if (tens == 4) show2.innerHTML = " Forty";
    else if (tens == 5) show2.innerHTML = " Fifty";
    else if (tens == 6) show2.innerHTML = " Sixty";
    else if (tens == 7) show2.innerHTML = " Seventy";
    else if (tens == 8) show2.innerHTML = " Eighty";
    else if (tens == 9) show2.innerHTML = " Ninety";


    if (tenUnit != 11 && tenUnit != 12 && tenUnit != 13 && tenUnit != 14 && tenUnit != 15 && tenUnit != 16 && tenUnit != 17 && tenUnit != 18 && tenUnit != 19) {
        if (tens == 0 && hundreds != 0) {
            if (units == 1) show3.innerHTML = " and One";
            if (units == 2) show3.innerHTML = " and Two";
            if (units == 3) show3.innerHTML = " and Three";
            if (units == 4) show3.innerHTML = " and Four";
            if (units == 5) show3.innerHTML = " and Five";
            if (units == 6) show3.innerHTML = " and Six";
            if (units == 7) show3.innerHTML = " and Seven";
            if (units == 8) show3.innerHTML = " and Eight";
            if (units == 9) show3.innerHTML = " and Nine";
        } else {
            if (units == 1) show3.innerHTML = " One";
            if (units == 2) show3.innerHTML = " Two";
            if (units == 3) show3.innerHTML = " Three";
            if (units == 4) show3.innerHTML = " Four";
            if (units == 5) show3.innerHTML = " Five";
            if (units == 6) show3.innerHTML = " Six";
            if (units == 7) show3.innerHTML = " Seven";
            if (units == 8) show3.innerHTML = " Eight";
            if (units == 9) show3.innerHTML = " Nine";
        }

    }

});


