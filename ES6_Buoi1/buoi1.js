var khaiBaoVar = "1";
let khaiBaoLet = "2";

const PI = 3.14;

// PI = 4;
// console.log(hoisting);
const hoisting = "Hoistring";
console.log(hoisting);

//scope
function runScope() {
    const scope = "1";
    if (true) {
        let scopeLet = "2";
        console.log(scopeLet);
    }
    // console.log(scopeLet);
}
runScope();

var khaiBaoLai = "";
var khaiBaoLai = "www";
console.log(khaiBaoLai);


//let ko dc khai bao lai
//const ko dc khai bao lai

const functionES6 = thamSo => thamSo * 2;

console.log(functionES6(4));

const CaSi = {
    ten: "Bin",
    baiHat: "Big City",
    diem: [5, 6, 7, 8, 9],
    hienThiThongTin: function () {
        this.diem.map((diemSo) => {
            console.log(`${CaSi.ten} - ${CaSi.baiHat} - ${diemSo}`);
        });

    }
}
CaSi.hienThiThongTin();

const funcDefaultParams = (dongVat = "cho") => {
    console.log("Nhap con vat vao: ", dongVat);
}

funcDefaultParams("meo");
funcDefaultParams();

// const sum = (a, b) => {
//     console.log("Tong = ", a + b);
// }
// sum(1,2);



//Rest Parameter

const sum = (...mangSo) => {
    let sum = mangSo.reduce((tichLuy, item) => {
        tichLuy += item;
        return tichLuy;
    }, 0);
    console.log("Tong = ", sum);
}

sum(1, 2, 3, 4);

//Spreed Operator
let khoA = ["Buoi", "Cam", "Tao"];
let khoB = [...khoA];
khoB.push("Dau");
console.log(khoA);
console.log(khoB);

let hv1 = {
    ten: "Nguyen Van A",
    lop: "BC02",
}
let hv2 = { ...hv1 };
hv2.diem = 9;
console.log(hv1);
console.log(hv2);

//Destracturing
let danhSachKhoaHoc = ["JS", "ReactJS", "NodeJS", "MongoDB"];

//ES5
// let js = danhSachKhoaHoc[0];
// let reactJS = danhSachKhoaHoc[1];
// let nodeJS = danhSachKhoaHoc[2];
// let mongoDB = danhSachKhoaHoc[3];

//ES6
let [js, reactJS, nodeJS, mongoDB] = danhSachKhoaHoc;

//object

let tuong = {
    ten: "yasua",
    thongThao: "7",
    cauNoi: "20p gg"
}

//ES5
// let tenTuong = tuong.ten;
// let thongThaoTuong = tuong.thongThao;
// let cauNoiTuong = tuong.cauNoi;

//ES6
let { ten: tenTuong, thongThao: thongThaoTuong, cauNoi: cauNoiTuong } = tuong;

//object literal
const msnv = "001";
const ho = "ho";
const ten = "ten"
const objectNV = {
    // msnv: msnv
    msnv,
    // hoTen : "Nguyen Van A"
    [ho + "Va" + ten]: "Nguyen Van A"
}
console.log(objectNV);

