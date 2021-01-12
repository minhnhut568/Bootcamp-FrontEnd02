
// function getEle(id) {
//     return document.getElementById(id);
// }

// function layThongTin() {
//     var maSV = getEle("txtMaSV").value;
//     var tenSV = getEle("txtTenSV").value;
//     var loaiSV = getEle("loaiSV").value;
//     var diemToan = parseFloat(getEle("txtDiemToan").value);
//     var diemVan = parseFloat(getEle("txtDiemVan").value);

//     var sinhVien = {
//         ma: maSV,
//         ten: tenSV,
//         loai: loaiSV,
//         toan: diemToan,
//         van: diemVan,

//         tinhDTB: function (diem1, diem2) {
//             return ((diem1 + diem2) / 2);
//         },

//         xepLoai: function (diem) {
//             if (diem >= 8) return "Gioi"
//             else if (diem >= 6 && diem < 8) return "Kha";
//             else if (diem >= 5 && diem < 6) return "Trung Binh";
//             else if (diem < 5 && diem > 0) return "Yeu";
//             else return "Khong co thong tin";
//         }


//     }
//     var dtb = sinhVien.tinhDTB(sinhVien.toan, sinhVien.van);
//     console.log(dtb);

//     var hocLuc = sinhVien.xepLoai(dtb);
//     console.log(hocLuc);

//     hienThi(sinhVien.ten, sinhVien.ma, sinhVien.loai, dtb, hocLuc);
// }
// function hienThi(ten, ma, loai, diem, hocLuc) {
//     getEle("spanTenSV").innerHTML = ten;
//     getEle("spanMaSV").innerHTML = ma;
//     getEle("spanLoaiSV").innerHTML = loai;
//     getEle("spanDTB").innerHTML = diem;
//     getEle("spanXepLoai").innerHTML = hocLuc;
// }
