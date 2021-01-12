//Global variable
var dssv = new DanhSachSinhVien();

function getEle(id) {
    return document.getElementById(id);
}

function layThongTin() {
    var ma = getEle("txtMaSV").value;
    var ten = getEle("txtTenSV").value;
    var email = getEle("txtEmail").value;
    var matKhau = getEle("txtPass").value;
    var ngaySinh = getEle("txtNgaySinh").value;
    var khoaHoc = getEle("khSV").value;
    var toan = getEle("txtDiemToan").value;
    var ly = getEle("txtDiemLy").value;
    var hoa = getEle("txtDiemHoa").value;

    //console.log(ma, ten, email, matKhau, ngaySinh, khoaHoc, toan, ly, hoa);
    var sv = new SinhVien(ma, ten, email, matKhau, ngaySinh, khoaHoc, toan, ly, hoa);
    //console.table(sv);

    return sv;

}

function themSinhVien() {
    var svMoi = layThongTin();
    dssv.themSV(svMoi);
    console.log(dssv.mangSV);
    hienThi(dssv.mangSV);
}

function hienThi(mangSV) {
    var tbody = getEle("tbodySinhVien");
    var content = "";

    //ho tro duyet mang, item la 1 sv, index la thu tu
    //String template ``
    //${} truyen bien va chuoi
    mangSV.map(function (item, index) {
        content += `
        <tr>
            <td>${item.maSV}</td>
            <td>${item.tenSV}</td>
        </tr>
        `;
    });
    tbody.innerHTML = content;
}

