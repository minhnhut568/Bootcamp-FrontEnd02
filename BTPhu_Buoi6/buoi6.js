


var n2 = document.getElementById("n2");
var p3 = document.getElementById("p3");
var btn3 = document.getElementById("btn3");
var string = "2 3";

btn3.addEventListener("click", function () {
    var valN2 = n2.value;
    valN2 = parseInt(valN2);
    function SoNguyenTo() {
        for (var i = 2; i < valN2; i++) {
            for (var j = 2; j * j <= i; j++) {
                if (i % j == 0)
                    break;
                else if (j + 1 > Math.sqrt(i)) {
                    string+=" " + i;
                }
            }
        }
        p3.innerHTML = string;
    }
    SoNguyenTo();
});
