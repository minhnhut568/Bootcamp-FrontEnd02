/**
 * 1/ Bắt sự kiện nut Thêm món
 * 2/ Lấy data người dùng nhập vào
 * 3/ Tạo 1 đối tượng món ăn từ lớp đồi tượng
 * 4/ Hiển thị đối tượng lên màn hình
 */

import { Food } from "../../controllers/v1/food.js";

const getEle = (id) => document.getElementById(id);

const display = (_food) => {
    getEle("spMa").innerHTML = _food.id;
    getEle("spTenMon").innerHTML = _food.name;
    if (_food.type == "loai1") getEle("spLoaiMon").innerHTML = "Chay";
    else getEle("spLoaiMon").innerHTML = "Mặn";
    getEle("spGia").innerHTML = _food.price;
    getEle("spKM").innerHTML = _food.disc;
    if (_food.type) getEle("spTT").innerHTML = "Hết";
    else getEle("spTT").innerHTML = "Còn";
    getEle("pMoTa").innerHTML = _food.discr;
    getEle("spGiaKM").innerHTML = _food.cost();
    getEle("imgMonAn").src = "../../assets/img/" + _food.img;
}

const AddProccess = () => {
    console.log("running");
    let id = getEle("foodID").value;
    let name = getEle("tenMon").value;
    let type = getEle("loai").value;
    let price = getEle("giaMon").value;
    let disc = getEle("khuyenMai").value;
    let status = getEle("tinhTrang").value;
    let img = getEle("hinhMon").files[0].name;
    let discr = getEle("moTa").value;
    const food = new Food(id, name, type, price, disc, status, img, discr);
    console.log(food);
    display(food);


};
getEle("btnThemMon").addEventListener("click", AddProccess);