var employeedata={"employees":[  
    {"name":"Shyam", "email":"shyamjaiswal@gmail.com"},  
    {"name":"bill", "email":"bill865@gmail.com"},  
    {"name":"joy", "email":"joy_joy54@gmail.com"},
    {"name":"ani", "email":"ani5532@gmail.com"},
    {"name":"ansh", "email":"ansh856_an@gmail.com"},
    {"name":"Bhanu", "email":"bhanu896@gmail.com"},
    {"name":"shiv", "email":"shiv758@gmail.com"},
    {"name":"man", "email":"man965@gmail.com"},
    {"name":"kams", "email":"kansool89@gmail.com"},
    {"name":"zara", "email":"zara857@gmail.com"},
    {"name":"rihan", "email":"rihna89@gmail.com"},
    {"name":"Jai", "email":"jai87@gmail.com"}  
]}; 
//var myobj = JSON.parse(employeedata);
//console.log(employeedata.employees);
var myboj = employeedata.employees;
var tbodyhtml='';
myboj.forEach(element=>{
 //console.log(element.name);
 tbodyhtml+='<tr>';
 tbodyhtml += '<td>'+element.name+'</td>';
 tbodyhtml += '<td>'+element.email+'</td></tr>';

   
});
 console.log(tbodyhtml);
document.getElementById("maindata").innerHTML=tbodyhtml;