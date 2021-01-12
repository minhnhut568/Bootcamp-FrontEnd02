// B1: Tạo hàm lấy thông tin
// B2: Lưu vào thể hiện của sv
// B3: Thêm sv vào mảng (danh sách sinh viên)

//global biến (biến toàn cục)
var dssv = new DanhSachSinhVien();
var validation = new Validation();
getLocalStorage();

// hàm document.getelementbyid ngắn
function getELE(id) {
    return document.getElementById(id);
}
function layThongTin() {
    var ma =  getELE("txtMaSV").value;  
    var ten =  getELE("txtTenSV").value;
    var email = getELE("txtEmail").value;
    var matKhau = getELE("txtPass").value;
    var ngaySinh = getELE("txtNgaySinh").value;
    var khoaHoc = getELE("khSV").value;
    var toan = getELE("txtDiemToan").value;
    var ly = getELE("txtDiemLy").value;
    var hoa = getELE("txtDiemHoa").value;
    // Kiểm tra dữ liệu
    // isValid: chứa kết quả sau khi kiểm tra
    var isValid = true;
    
    // Masv
    isValid &= validation.checkEmpty(ma, getELE("spanMaSV"), "Mã sinh viên không được để trống!") && validation.checkMaSV(ma, getELE("spanMaSV"), "Mã sinh viên không được trung!", dssv.mangSV);
    // isValid == true

    //Ten
    isValid &= validation.checkEmpty(ten, getELE("spanTenSV"), "Ten sinh viên không được để trống!") && validation.checkLetter(ten, getELE("spanTenSV"),"Ten khong duoc hop le");

    //email
    isValid &= validation.checkEmpty(email, getELE("spanEmail"), "Email không được để trống!") && validation.checkString(email, getELE("spanEmail"), "Email không được trung!", dssv.mangSV) && validation.checkEmail(email, getELE("spanEmail"), "Email không hop le!", dssv.mangSV);

    //Mat khau
    isValid &= validation.checkEmpty(matKhau, getELE("spanMatKhau"), "Mat khau không được để trống!") && validation.checkMatKhau(matKhau, getELE("spanMatKhau"), "Mat khau khong hop le", 5, 100) && validation.checkFormatPass(matKhau, getELE("spanMatKhau"), "Mat khau khong hop le");

    //Ngay sinh
    isValid &= validation.checkDate(ngaySinh, getELE("spanNgaySinh"), "Ngay sinh khong hop le");

    //Khoa hocs
    isValid &= validation.checkDropDown(getELE("khSV"), getELE("spanKhoaHoc"), "Xin chon khoa hoc");

    //Diem
    isValid &= validation.checkEmpty(toan, getELE("spanToan"), "Diem toan không được để trống!") && validation.checkDiem(toan, getELE("spanToan"), "Diem toan khong hop le");
    isValid &= validation.checkEmpty(ly, getELE("spanLy"), "Diem Ly không được để trống!") && validation.checkDiem(ly, getELE("spanLy"), "Diem ly khong hop le");
    isValid &= validation.checkEmpty(hoa, getELE("spanHoa"), "Diem hoa không được để trống!") && validation.checkDiem(hoa, getELE("spanHoa"), "Diem hoa khong hop le");

    if(isValid){
        // Thể hiện của lớp đối tượng SinhVien (muốn dùng lớp đối tượng phải thể hiện(new))
        var sv = new SinhVien(ma, ten, email, matKhau, ngaySinh, khoaHoc, parseFloat(toan), parseFloat(ly), parseFloat(hoa));
        sv.tinhDTB(sv.diemToan, sv.diemLy, sv.diemHoa);
        console.table(sv);
        return sv;
    }

}

// Thêm sinh viên mới vào mảng
function themSinhVien() {
    var svMoi = layThongTin();

    if (svMoi != null) {
        //Thêm objects SinhVien vào mảng DanhSachSinhVien
        dssv.themSV(svMoi);

        console.log(dssv.mangSV);
        // Lưu sinh viên mới xuông localstorage
        setLocalStorage();
        hienThi(dssv.mangSV);
    }
    
}

function hienThi (mangSV) {
    var tbody = getELE("tbodySinhVien");
    var content = "";

    // hàm duyệt mảng
    // item: đại diện cho một sv
    // string template: giúp gõ thẻ html dễ dàng trong js
    // ${} truyền biến vào chuỗi (chỉ áp dụng string template)
    mangSV.map(function(item, index){
        // Gọi phương thức tinhDTB
        // item.tinhDTB(item.diemToan, item.diemLy, item.diemHoa);
        content +=`
        <tr>
            <td>${item.maSV}</td>
            <td>${item.tenSV}</td>
            <td>${item.email}</td>
            <td>${item.ngaySinh}</td>
            <td>${item.khoaHoc}</td>
            <td>${item.dtb}</td>
            <td>
                <button class="btn btn-info" onclick="suaSinhVien('${item.maSV}')">Sửa</button>    
                <button class="btn btn-danger" onclick="xoaSinhVien('${item.maSV}')">Xóa</button>
            </td>
        </tr>
        `;
    });
    tbody.innerHTML = content;
}

// Lưu dữ liệu xuống local storage (kho lưu trứ offline)
function setLocalStorage () {
    // localStorage: Đối tượng tạo sẵn của JS, giúp tương tác với local storage
    // JSon: loại dữ liệu được lưu xuống back-end và lấy lên từ back-end
    // Lưu mảng sinh viên cần chuyển sảng kiểu json để lưu
    // Sử dụng đối tượng JSON để chuyển kiểu dữ liệu từ mảng sang JSON (stringify)
    localStorage.setItem("DSSV",JSON.stringify(dssv.mangSV));
}

// Lấy dữ liệu từ local storage và hiện lên UI
function getLocalStorage () {
    // dữ liệu khi getItem là Json nên cần chuyển về kiểu mảng để hiển thị
    // JSON.parse: chuyển từ JSON - mảng
    // Nếu getItem không bị null => tìm thấy kho lưu trữ DSSV
    if (localStorage.getItem("DSSV") != null){
        dssv.mangSV = JSON.parse(localStorage.getItem("DSSV")); 
            // Hiển thị lên table
        hienThi(dssv.mangSV);
    }  
}

// Khai báo xóa sinh viên
function xoaSinhVien(ma) {
    dssv.xoaSV(ma);
    // Lưu dữ liệu mới xuống kho lưu trữ
    setLocalStorage();
    // Hiển thị dữ liệu mới
    hienThi(dssv.mangSV);
}

function suaSinhVien(ma) {
    var viTri = dssv.timViTri(ma);
    console.log(viTri);
    if (viTri > -1 ){
        getELE("txtMaSV").setAttribute("disabled", true);
        getELE("txtMaSV").value = dssv.mangSV[viTri].maSV;
        getELE("txtTenSV").value = dssv.mangSV[viTri].tenSV;
        getELE("txtEmail").value = dssv.mangSV[viTri].email;
        getELE("txtPass").value = dssv.mangSV[viTri].matKhau;
        getELE("txtNgaySinh").value = dssv.mangSV[viTri].ngaySinh;
        getELE("khSV").value = dssv.mangSV[viTri].khoaHoc;
        getELE("txtDiemToan").value = dssv.mangSV[viTri].diemToan;
        getELE("txtDiemLy").value = dssv.mangSV[viTri].diemLy;
        getELE("txtDiemHoa").value = dssv.mangSV[viTri].diemHoa;
    }
}

// Hàm clear dữ liệu form
function resetForm() {
    getELE("txtMaSV").removeAttribute("disabled");
    // C1: DOM từng id thẻ form chuyển value -> rỗng
    getELE("quanlySinhVien").reset();
}

// Hàm cập nhật sinh viên
function capNhatSV() {
    var sv = layThongTin();
    console.log(sv);
    dssv.capNhat(sv);

    // Lưu thông tin mới của sinh viên vào local storage
    setLocalStorage();
    // Hiển thị thông tin mới lên table
    hienThi(dssv.mangSV);
}
getELE("btnSearch").onclick = function(){
    var chuoiTK = getELE("txtSearch").value;
    var mangTK = dssv.timKiemSV(chuoiTK);
    hienThi(mangTK);
}