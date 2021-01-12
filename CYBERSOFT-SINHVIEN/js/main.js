//Lay cac diem trung binh
var tbl = document.getElementById("tblBody");
// console.log(tbl);
// console.log(tbl.rows)
// console.log(tbl.rows[0]);
// console.log(tbl.rows[0].cells[3].innerHTML);


var scoreList = [];

function addScoreList() {
    //c1 rows va cells
    for (var i = 0; i < tbl.rows.length; i++) {
        scoreList[i] = tbl.rows[i].cells[3].innerHTML;
        console.log(scoreList[i]);
        scoreList.push(parseFloat(scoreList[i]));
    }
    //c2: lay bang class
    // var arrClass = document.getElementsByClassName("td-scores");
    // console.log(arrClass);
    // for (var i = 0; i < arrClass.length; i++) {
    //     console.log(arrClass[i].innerHTML);
    //     arrClass.push(arrClass[i].innerHTML);
    // }
}
addScoreList();



//Tim sinh vien co diem trung binh lon nhat
function FindStudentOfMaxscore() {
    var location = 0;
    var max = scoreList[location];
    for (var i = 1; i < scoreList.length; i++) {
        if (max < scoreList[i]) {
            max = scoreList[i];
            location = i;
        }
    }
    var name = tbl.rows[location].cells[2].innerHTML;
    console.log(name);
    console.log(max);
    document.getElementById("svGioiNhat").innerHTML = "Tên: " + name + " Điểm trung bình: " + max;
}
document.getElementById("btnSVCaoDiemNhat").onclick = FindStudentOfMaxscore;

function FindStudentOfMinscore() {
    var location = 0;
    var min = scoreList[location];
    for (var i = 1; i < scoreList.length; i++) {
        if (min > scoreList[i]) {
            min = scoreList[i];
            location = i;
        }
    }
    var name = tbl.rows[location].cells[2].innerHTML;
    console.log(name);
    console.log(min);
    document.getElementById("svYeuNhat").innerHTML = "Tên: " + name + " Điểm trung bình: " + min;
}
document.getElementById("btnSVThapDiemNhat").onclick = FindStudentOfMinscore;



function CountGoodStudent() {
    var count = 0;
    for (var i = 0; i < scoreList.length; i++) {
        if (scoreList[i] >= 8) count++;
    }
    document.getElementById("soSVGioi").innerHTML = count;
}
document.getElementById("btnSoSVGioi").onclick = CountGoodStudent;


function ListOfStudentOver5() {
    var content = "";
    var location = 0;
    for (var i = 0; i < scoreList.length; i++) {
        if (scoreList[i] >= 5) {
            content += tbl.rows[i].cells[2].innerHTML;

        }
    }
    document.getElementById("dsDiemHon5").innerHTML = content;
}
document.getElementById("btnSVDiemHon5").onclick = ListOfStudentOver5;



function selectionSort() {
    for (var i = 0; i < scoreList.length - 1; i++) {
        for (var j = i + 1; j < scoreList.length; j++) {
            if(scoreList[i] > scoreList[j]){
                var temp = scoreList[i];
                scoreList[i] = scoreList[j];
                scoreList[j] = temp;
            }
        }
    }

    var content = "";
    for (var i = 0; i < scoreList.length; i++) {
        if (i == 0) content += " " + scoreList[i];
        else content += " / " + scoreList[i];
    }
    document.getElementById("dtbTang").innerHTML = content;
}
document.getElementById("btnSapXepTang").onclick = selectionSort;