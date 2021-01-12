// Chứa danh sách tập hợp nhiều sinh viên
// Hiển thị danh sách sinh viên
// Tìm kiếm sinh viên

function DanhSachSinhVien() {
    // Thuộc tính
    this.mangSV = [];

    // Phương thức
    this.themSV = function (sv) {
        this.mangSV.push(sv);
    }

    // Phương thức tìm vị trí sinh viên trong mảng dựa vào mã sinh viên
    // B1: tạo một biến vị viTri, giá trị khởi tạo là viTri = -1
    // B2: duyệt mảng
    // Nếu sv.maSV (phần tử của mangSV) === ma (mã sinh viên được truyền từ UI) => gán vị trí tìm thấy cho biến viTri
    // Nếu không tìm thấy thì viTri = -1
    this.timViTri = function(ma){
        var viTri = -1;
        // item là 1 sv trong mảng
        // index là vị trí phần tử trong mảng
        this.mangSV.map(function(item,index){
            if (item.maSV === ma){
                viTri = index;
            }
        });
        return viTri;
    }

    this.xoaSV = function(ma){
        var viTri = this.timViTri(ma);
        // Nếu tìm thấy sinh viên
        if (viTri > -1) {
            // splice(viTri, số phần tử cần cắt ra khỏi mảng)
            this.mangSV.splice(viTri, 1);
        } else {
            console.log ("Không tìm thấy sinh viên");
        }
    }

    this.capNhat = function(sv) {
        var viTri = this.timViTri(sv.maSV);
        if (viTri > -1) {
            // Nếu tìm thấy vị trí -> thì thay thế giá trị của đối tượng ở vị trị đó (vitri[vitri]) = tham số sv
            // Tham số sv sẽ được thay thế giá mới (lấy từ hàm layThongTin) ở bên file bai2.js khi nhấn nút cập nhật ở UI
            dssv.mangSV[viTri] = sv;
        }
    }

    //prototype: giup tao thuoc tinh va phuong thuc, tiec kiem bo nho
    DanhSachSinhVien.prototype.timKiemSV = function(chuoiTK){
        var mangTK = [];
        this.mangSV.map(function(item){
            if(item.tenSV.toLowerCase().indexOf(chuoiTK.toLowerCase()) > -1){
                mangTK.push(item);
            }
        });
        return mangTK;
    }
}