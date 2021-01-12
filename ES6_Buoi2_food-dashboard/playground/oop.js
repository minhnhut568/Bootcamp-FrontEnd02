function SinhVien(_ten){
    this.ten = _ten;
    this.dtb = function (){
        console.log("Diem trung binh");
    }
}

var sv1 = new SinhVien("Nguyen Van A");



class NhanVien {
    constructor(_ten){
        this.ten = _ten;
    }
    tinhLuong()
    {
        console.log("Luong");
    }
}

let nv1 = new NhanVien("Nguyen Van B");
console.log("Nhan Vien 1: ", nv1);
nv1.tinhLuong();