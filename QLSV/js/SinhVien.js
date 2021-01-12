// Khai báo lớp đối tượng (class)
// JavaScript(ES5) dùng từ khóa function
// hàm thông thường khai báo tên biến kiêu camel: tinhDTB, hienThi,...
// Lớp đối tượng khai báo tên biến kiểu pascal case: SinhVien, NhanVien, GiangVien,...

function SinhVien(_maSV, _tenSV, _loaiSV, _diemToan, _diemVan){
    // thuộc tính
    // con trỏ this, this chính là lớp đối tượng SinhVien
    this.ma = _maSV;
    this.ten = _tenSV;
    this.loai = _loaiSV;
    this.toan = _diemToan;
    this.van = _diemVan;
    // ten:tenSV,
    // loai:loaiSV,
    // toan:diemToan,
    // van:diemVan,

    // Phương thức
    this.tinhDTB = function (diemToan, diemVan){
        var dtb = (diemToan + diemVan)/2;
        return dtb;
    }

};