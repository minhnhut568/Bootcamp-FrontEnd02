// B1: Lấy thông tin sinh viên layThongTin
// B2: Tạo hàm tính tinhDTB
// B3: tạo hàm xepLoai
// B4: tạo hàm hienThi

// Rút gọn cú phạm của document.getElementById
// id: tên id của thẻ (kiểu chuỗi)
function getELE(id) {
    // C1:
    // var ele = document.getElementById(id);
    // return ele;
    // C2:
    return document.getElementById(id);
}

function layThongTin(){
    var maSV = getELE("txtMaSV").value;
    var tenSV = getELE("txtTenSV").value;
    var loaiSV = getELE("loaiSV").value;
    var diemToan= parseFloat(getELE("txtDiemToan").value);
    var diemVan = parseFloat(getELE("txtDiemVan").value);

    var dtb = tinhDTB(diemToan, diemVan);
    var hocLuc = xepLoai(dtb);
        hienThi(tenSV, maSV, loaiSV, dtb, hocLuc);
    console.log(dtb, hocLuc);
} // Click thêm trực tiêp bên HTML

// Khai báo hàm điểm trung bình
function tinhDTB(diemToan, diemVan) {
    var dtb = (diemToan + diemVan)/2;
    return dtb;
}

// Khai báo hàm xếp loại
function xepLoai(dtb) {
    if (dtb > 8.5) {
        return "Giỏi";
    } else if (dtb <= 8.5 && dtb > 6) {
        return "Khá";
    } else if (dtb > 5 && dtb <= 6) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}   

// Hiển thị
function hienThi(tenSV, maSV, loaiSV, DTB, hocLuc) {
    getELE("spanTenSV").innerHTML = tenSV;
    getELE("spanMaSV").innerHTML = maSV;
    getELE("spanLoaiSV").innerHTML = loaiSV;
    getELE("spanDTB").innerHTML = DTB;
    getELE("spanXepLoai").innerHTML = hocLuc;
}