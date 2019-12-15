function showage(){
    var bdate=document.getElementById("dob").value;
    var byear=new Date(bdate);
    var by=byear.getFullYear();
    var d = new Date();
var currentdate= d.getFullYear();
var age = currentdate-by;

 document.getElementById("showage").innerHTML=age;
}
function showmy(){
    var bdate=document.getElementById("monthy").value;
    var byear=new Date(bdate);
    var by=byear.getFullYear();
    var bm=byear.getMonth();
    var d = new Date();
var currentdate= d.getFullYear();
var currentmonth=d.getMonth();
var cmonthn=currentmonth-bm; 
var year = currentdate-by;

 document.getElementById("my").innerHTML=cmonthn;
 document.getElementById("yy").innerHTML=year;
}
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();