//khai bao the hien
var ndService = new NguoiDungService();

function getELE(id) {
    return document.getElementById(id);
}
layDSND();
//Lay danh sach
function layDSND() {
    var promise = ndService.layDS();
    promise.then(function (result) {
        //Neu thanh cong
        console.log(result.data);
        hienThi(result.data);

    }).catch(function (error) {
        //Nguoc lai
        console.log(error);
    });
}

function hienThi(mangDS) {
    var tbody = getELE("tblDanhSachNguoiDung");
    var content = "";
    var stt = 1;
   
    mangDS.map(function (item) {
        content += `
            <tr>
                <td>${stt++}</td>
                <td>${item.taiKhoan}</td>
                <td>${item.matKhau}</td>
                <td>${item.hoTen}</td>
                <td>${item.email}</td>
                <td>${item.soDT}</td>
                <td>${item.maLoaiNguoiDung}</td>
                <td>
                <button class="btn btn-danger" onclick="xoaNguoiDung('${item.id}');">Xoa</button>
                <button class="btn btn-success" onclick="suaNguoiDung('${item.id}');" data-toggle="modal"
                data-target="#myModal">Sua</button>
                </td>

            </tr>
        `;
    });
    tbody.innerHTML = content;
}

function xuLyFormThem() {
    var modalTitle = document.querySelector("#myModal .modal-title");
    modalTitle.innerHTML = "Them Nguoi Dung";

    var modalFooter = document.querySelector("#myModal .modal-footer");
    modalFooter.innerHTML = `
        <button class="btn btn-success" onclick="themNguoiDung();">Them</button>
    `;
}
//Goi 1 ham
// getELE("btnThemNguoiDung").addEventListener("click", xuLyFormThem);
getELE("btnThemNguoiDung").addEventListener("click", function () {
    xuLyFormThem();
});

function themNguoiDung(_taiKhoan, _hoTen, _matKhau, _email, _soDT, _maLoaiNguoiDung) {
    var taiKhoan = getELE("TaiKhoan").value;
    var hoTen = getELE("HoTen").value;
    var matKhau = getELE("MatKhau").value;
    var email = getELE("Email").value;
    var soDT = getELE("SoDienThoai").value;
    var maLoaiNguoiDung = getELE("loaiNguoiDung").value;
    console.log(taiKhoan, hoTen, matKhau, email, soDT, maLoaiNguoiDung);
    var nd = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT, maLoaiNguoiDung);
    console.log(nd);

    ndService.themND (nd)
    .then(function(result){
        console.log(result);
        //Neu them thanh cong thi load lai danh sach
        layDSND();
        document.querySelector("#myModal .close").click();
    }).catch(function(error){
        console.log(error);
    });
}

function xoaNguoiDung(id){
    ndService.xoaND(id).then(function(result){
        //Neu xoa duoc
        layDSND();
    }).catch(function(error){
        console.log(error);
    });
}

function suaNguoiDung(id){
    var modalTitle = document.querySelector("#myModal .modal-title");
    modalTitle.innerHTML = "Cap Nhat";

    var modalFooter = document.querySelector("#myModal .modal-footer");
    modalFooter.innerHTML = `
        <button class="btn btn-success" onclick="capNhat('${id}');" id="btnCapNhat">Cap Nhat</button>
    `;
    ndService.layChiTiet(id).then(function(result){
        console.log(result.data);
        getELE("TaiKhoan").value = result.data.taiKhoan;
        getELE("HoTen").value = result.data.hoTen;
        getELE("MatKhau").value = result.data.matKhau;
        getELE("Email").value = result.data.email;
        getELE("SoDienThoai").value = result.data.soDT;
        getELE("LoaiNguoiDung").value = result.data.maLoaiNguoiDung;
    }).catch(function(error){
        console.log(error);
    });
}

function capNhat(id){
    var taiKhoan = getELE("TaiKhoan").value;
    var hoTen = getELE("HoTen").value;
    var matKhau = getELE("MatKhau").value;
    var email = getELE("Email").value;
    var soDT = getELE("SoDienThoai").value;
    var maLoaiNguoiDung = getELE("loaiNguoiDung").value;
    var nd = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT, maLoaiNguoiDung);
    ndService.capNhatND(nd,id).then(function(){
        layDSND();
        document.querySelector("#myModal .close").click();
    }).catch(function(error){
        console.log(error);
    });
}
