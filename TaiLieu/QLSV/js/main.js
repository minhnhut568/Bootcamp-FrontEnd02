
// function getEle(id) {
//     return document.getElementById(id);
// }

// function layThongTin() {
//     var maSV = getEle("txtMaSV").value;
//     var tenSV = getEle("txtTenSV").value;
//     var loaiSV = getEle("loaiSV").value;
//     var diemToan = parseFloat(getEle("txtDiemToan").value);
//     var diemVan = parseFloat(getEle("txtDiemVan").value);

//     console.log(tinhDTB(diemToan, diemVan));
//     console.log(xepLoai(tinhDTB(diemToan, diemVan)));
//     hienThi(tenSV, maSV, loaiSV, tinhDTB(diemToan, diemVan), xepLoai(tinhDTB(diemToan, diemVan)));
// }
// function tinhDTB(diem1, diem2) {
//     return ((diem1 + diem2) / 2);
// }
// function xepLoai(diem) {
//     if (diem >= 8) return "Gioi"
//     else if (diem >= 6 && diem < 8) return "Kha";
//     else if (diem >= 5 && diem < 6) return "Trung Binh";
//     else if (diem < 5 && diem >0) return "Yeu";
//     else return "Khong co thong tin";
// }
// function hienThi(ten, ma, loai, diem, hocLuc) {
//     getEle("spanTenSV").innerHTML = ten;
//     getEle("spanMaSV").innerHTML = ma;
//     getEle("spanLoaiSV").innerHTML = loai;
//     getEle("spanDTB").innerHTML = diem;
//     getEle("spanXepLoai").innerHTML = hocLuc;
// }
