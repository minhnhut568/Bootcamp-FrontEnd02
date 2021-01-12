

var inpNum1 = document.getElementById("inpNum1");
var inpNum2 = document.getElementById("inpNum2");
var btnCalBT5 = document.getElementById("btnCalBT5");

btnCalBT5.addEventListener("click", function () {
    var num1 = Number(inpNum1.value);
    var num2 = Number(inpNum2.value);
    var units_num1 = 0;
    var units_num2 = 0;
    var tens_num1 = 0;
    var tens_num2 = 0;
    var sum1 = 0;
    var sum2 = 0;

    units_num1 = num1 % 10;
    units_num2 = num2 % 10;
    tens_num1 = Math.floor(num1 / 10);
    tens_num2 = Math.floor(num2 / 10);
    sum1 = units_num1 + tens_num1;
    sum2 = units_num2 + tens_num2;

    anncemntOfNum1.innerHTML = "The sum of the tens and units of Number 1 = " + sum1;
    anncemntOfNum2.innerHTML = "The sum of the tens and units of Number 2 = " + sum2;

});