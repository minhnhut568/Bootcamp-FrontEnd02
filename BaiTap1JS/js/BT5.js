// debugger;
var num1 = 0;
var num2 = 0;
var units_num1 = 0;
var units_num2 = 0;
var tens_num1 = 0;
var tens_num2 = 0;
var sum1 = 0;
var sum2 = 0;

//gán giá trị
num1 = 12;
num2 = 24;

//lay gia tri hang don vi cua num1
units_num1 = num1 % 10;
//lay gia tri hang don vi cua num2
units_num2 = num2 % 10;

//lay gia tri hang chuc cua num1
tens_num1 = Math.floor(num1 / 10);
//lay gia tri hang chuc cua num2
tens_num2 = Math.floor(num2 / 10);

//tinh tong so num1
sum1 = units_num1 + tens_num1;
//tinh tong so num2
sum2 = units_num2 + tens_num2;

//Xuat ra
console.log("\nnum1 = 12\nnum2 = 24");
console.log("The sum of the tens and units of num1 = " + sum1);
console.log("The sum of the tens and units of num2 = " + sum2);