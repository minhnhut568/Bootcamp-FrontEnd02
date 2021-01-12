function getELE(id) {
    return document.getElementById(id);
}

function layThongTin(){
    var maSV = getELE("txtMaSV").value;
    var tenSV = getELE("txtTenSV").value;   
    var loaiSV = getELE("loaiSV").value;
    var diemToan= parseFloat(getELE("txtDiemToan").value);
    var diemVan = parseFloat(getELE("txtDiemVan").value);

    // Gọi lớp đối tượng phải tạo thể hiện(instance) của lớp đối tượng
    // sv trở thành thể hiện của lớp khi có khai báo new
    var sv =  new SinhVien(maSV, tenSV, loaiSV, diemToan, diemVan);
    // biến sv đã khai báo phía trên nên có thể khai báo lớp đối tượng local
    var dtb = sv.tinhDTB(sv.toan, sv.van); // điểm trung bình đã được gán vào biến dtb bởi phương thức tinhDTB của thể hiện sv
    console.table(sv);

    hienThi(sv.ten, sv.ma, sv.loai, dtb, "Giỏi");
}

function hienThi(tenSV, maSV, loaiSV, DTB, hocLuc) {
    getELE("spanTenSV").innerHTML = tenSV;
    getELE("spanMaSV").innerHTML = maSV;
    getELE("spanLoaiSV").innerHTML = loaiSV;
    getELE("spanDTB").innerHTML = DTB;
    getELE("spanXepLoai").innerHTML = hocLuc;
}