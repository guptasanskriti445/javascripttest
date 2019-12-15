function edit(btnid){
    btnele= document.getElementById(btnid);
    var btnpar=btnele.parentNode;
    var minrowele=btnpar.parentNode;
    var childelement=minrowele.childNodes;
    var inputele =childelement[5].childNodes[0];
    if(btnele.innerHTML=='Edit'){
        btnele.innerHTML="Save";      
        var textvalue =childelement[3].innerHTML;        
        inputele.value=textvalue;
        childelement[3].style.display="none";
        childelement[5].style.display="inline-block";
    }else{
        btnele.innerHTML="Edit";  
        childelement[3].innerHTML=inputele.value;
        childelement[3].style.display="inline-block";
        childelement[5].style.display="none";
    }
    console.log("inputele");

}
function dropdownclose(btncid){
    btnele= document.getElementById(btncid);
    var btnpar=btnele.parentNode;
    btnpar.parentElement.style.display = 'none';

    }