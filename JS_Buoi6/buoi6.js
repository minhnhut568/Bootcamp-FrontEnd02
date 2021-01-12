//1.
var p1 = document.getElementById("p1");
var btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
    var tong = 0;
    var n = 0;
    for (var i = 0; i <= n; i++) {
        tong += i;
        if (tong > 10000) {
            break;
        }
        n++;
    }
    p1.innerHTML = tong;

});

//2.
var n = document.getElementById("n");
var x = document.getElementById("x");
var p2 = document.getElementById("p2");
var btn2 = document.getElementById("btn2");
var tong = 0;

btn2.addEventListener("click", function () {
    var valX = x.value;
    var valN = n.value;
    function Tong() {
        for (var i = 1; i <= valN; i++) {
            tong += Math.pow(valX, i);
        }
        p2.innerHTML = tong;
    }
    Tong();
});

//3.
var n2 = document.getElementById("n2");
var p3 = document.getElementById("p3");
var btn3 = document.getElementById("btn3");
var giaiThua = 1;

btn3.addEventListener("click", function () {
    var valN2 = n2.value;
    function GiaiThua() {
        for (var i = 1; i <= valN2; i++) {
            giaiThua *= i;
        }
        p3.innerHTML = giaiThua;
    }
    GiaiThua();
});

//4.
var div1 = document.getElementById("div1");
var div1 = document.getElementById("div2");
var div1 = document.getElementById("div3");
var div1 = document.getElementById("div4");
var div1 = document.getElementById("div5");
var div1 = document.getElementById("div6");
var div1 = document.getElementById("div7");
var div1 = document.getElementById("div8");
var div1 = document.getElementById("div9");
var div1 = document.getElementById("div10");
var btn4 = document.getElementById("btn4");
var h1 = document.getElementById("h1");



btn4.addEventListener("click", function () {

    function changeBackground1(_color) {
        div1.style.backgroundColor = _color;
        div3.style.backgroundColor = _color;
        div5.style.backgroundColor = _color;
        div7.style.backgroundColor = _color;
        div9.style.backgroundColor = _color;
    }
    function changeBackground2(_color) {
        div2.style.backgroundColor = _color;
        div4.style.backgroundColor = _color;
        div6.style.backgroundColor = _color;
        div8.style.backgroundColor = _color;
        div10.style.backgroundColor = _color;
    }

    var div = "div";
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) changeBackground1('red');
        else changeBackground2('green');
    }


});