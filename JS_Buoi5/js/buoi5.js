var inputDiem = document.getElementById("inputDiem");
var inputMon1 = document.getElementById("inputMon1");
var inputMon2 = document.getElementById("inputMon2");
var inputMon3 = document.getElementById("inputMon3");
var inputKhuVuc = document.getElementById("inputKhuVuc");
var inputDoiTuong = document.getElementById("inputDoiTuong");
var btn1 = document.getElementById("btn1");
var p = document.getElementById("p");



btn1.addEventListener("click", function () {
    var diem = Number(inputDiem.value);
    var mon1 = Number(inputMon1.value);
    var mon2 = Number(inputMon2.value);
    var mon3 = Number(inputMon3.value);
    var khuVuc = Number(inputKhuVuc.value);
    var doiTuong = Number(inputDoiTuong.value);

    var diemUuTien = 0;
    if (khuVuc == "A") diemUuTien += 2;
    else if (khuVuc == "B") diemUuTien += 1;
    else if (khuVuc == "C") diemUuTien += 0.5;

    if (doiTuong == "1") diemUuTien += 2.5;
    else if (doiTuong == "2") diemUuTien += 1.5;
    else if (doiTuong == "3") diemUuTien += 1;

    var diemTongKet = mon1 + mon2 + mon3 + diemUuTien;

    if (diemTongKet >= diem) {
        p.innerHTML = "Đậu với điểm: " + diemTongKet;
    }
    else {
        p.innerHTML = "Rớt với điểm: " + diemTongKet;
    }
});



var ten = document.getElementById("ten");
var sokw = document.getElementById("kw");
var p2 = document.getElementById("p2");
var btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function(){
    var tienDien = 0;
    var kw = sokw.value;
    if(kw <= 50) tienDien = 500*kw;
    else if(kw > 50 && kw <= 102) tienDien = 500*50 + (kw-50)*650;
    else if(kw > 102 && kw <= 203) tienDien = 500*50 + (102-50)*650 + (kw-102-50)*850;
    else if(kw > 203 && kw <= 354) tienDien = 500*50 + (102-50)*650 + (203-102-50)*850 + (kw-203-102-50)*1100;
    else if(kw > 354) tienDien = 500*50 + (102-50)*650 + (203-102-50)*850 + (304-203-102-50)*1100 + (kw-304-203-102-50)*1300;

    p2.innerHTML = ten.value + " : " + tienDien + " VNĐ";
});