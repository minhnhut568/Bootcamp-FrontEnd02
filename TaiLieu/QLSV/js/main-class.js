
// function getEle(id) {
//     return document.getElementById(id);
// }

// function layThongTin() {
//     var maSV = getEle("txtMaSV").value;
//     var tenSV = getEle("txtTenSV").value;
//     var loaiSV = getEle("loaiSV").value;
//     var diemToan = parseFloat(getEle("txtDiemToan").value);
//     var diemVan = parseFloat(getEle("txtDiemVan").value);

//     var sv = new SinhVien(maSV, tenSV, loaiSV, diemToan, diemVan);
//     console.log(sv);
    
//     var dtb = sv.tinhDTB(sv.toan, sv.van);
    
//     hienThi(sv.ten, sv.ma, sv.loai, dtb, sv.xepLoai(dtb));
// }
// function hienThi(ten, ma, loai, diem, hocLuc) {
//     getEle("spanTenSV").innerHTML = ten;
//     getEle("spanMaSV").innerHTML = ma;
//     getEle("spanLoaiSV").innerHTML = loai;
//     getEle("spanDTB").innerHTML = diem;
//     getEle("spanXepLoai").innerHTML = hocLuc;
// }
