

var inpLeng = document.getElementById("inpLeng");
var inpWid = document.getElementById("inpWid");
var btnCalBT4 = document.getElementById("btnCalBT4");


btnCalBT4.addEventListener("click", function () {
    var valLeng = inpLeng.value;
    var valWid = inpWid.value;
    var area = valLeng * valWid;
    var perimeter = (Number(valLeng) + Number(valWid))/2;

    anncemntOfPermet.innerHTML = "Rectangular Perimeter = " + perimeter;
    anncemntOfArea.innerHTML = "Rectangular Area = " + area;

});

