function showhidemenu(){
    var  menushowhide= document.getElementById("menubutton");
    if(menushowhide.style.display === "none")
    {
        menushowhide.style.display = "block";
    }
    else{
        menushowhide.style.display = "none";
    }
}

  /*  var header = document.getElementById("btns");
var btn = header.getElementsByClassName("normalbutton");
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  
      
    current[0].className = current[0].className.replace(" active", "");
  
  this.className += " active";
  });
}*/
    
    
    
