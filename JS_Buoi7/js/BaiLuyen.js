
//Them cac so vao mang
var arrayNum = [];

function addArray() {
    var num = parseInt(document.getElementById("inpNum").value);
    arrayNum.push(num);
    console.log(arrayNum);
}
document.getElementById("addNum").onclick = addArray;


function sumOfEvenNum() {
    var sum = 0;
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] % 2 == 0) {
            sum += arrayNum[i];
        }
    }
    document.getElementById("txtAnnce").innerHTML = "Sum of even number = " + sum;
}
document.getElementById("sum").onclick = sumOfEvenNum;


function countMinusNum() {
    var count = 0;
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] < 0) {
            ++count;
        }
    }
    document.getElementById("txtAnnce").innerHTML = "Amount of minus number = " + count;
}
document.getElementById("minus").onclick = countMinusNum;


function sumOfMinusNum() {
    var sum = 0;
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] < 0) {
            sum += arrayNum[i];
        }
    }
    document.getElementById("txtAnnce").innerHTML = "Sum of minus number = " + sum;
}
document.getElementById("sumOfMinus").onclick = sumOfMinusNum;