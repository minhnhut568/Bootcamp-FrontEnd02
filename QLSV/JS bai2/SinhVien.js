// Chứa thông tin chi tiết của sinh viên
function SinhVien(_maSV, _tenSV, _email, _matKhau, _ngaySinh, _khoaHoc, _diemToan, _diemLy, _diemHoa) {
    // Thuộc tính
    this.maSV = _maSV;
    this.tenSV = _tenSV;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngaySinh = _ngaySinh;
    this.khoaHoc = _khoaHoc;
    this.diemToan = _diemToan;
    this.diemLy = _diemLy;
    this.diemHoa = _diemHoa;
    this.dtb = 0;

    // Phương thức
    this.tinhDTB = function (toan, ly, hoa) {
        // Đã có thuộc tính dtb nên không cần return, trả kết quả cho thuộc tính dtb
        this.dtb = ((toan + ly + hoa)/3).toFixed(2);
    }
}   