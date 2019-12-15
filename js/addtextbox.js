var index=0;
function addtextbox() {
    index=index+1;
    var textbox =document.createElement("INPUT");
    textbox.setAttribute("type", "textbox");
    textbox.setAttribute("value", "");
    textbox.setAttribute("id", "text"+index);
    
    
    
    var textboxdiv=document.getElementById("textbox");
    textboxdiv.appendChild(textbox);
}
function removetextbox(id){
    if(index != 0){
        var contentid = document.getElementById("textbox");
        var tbx = document.getElementById("text"+index); 
        contentid.removeChild(tbx);
        index=index-1;
    }
     
}
function addcheckbox() {
    index=index+1;
    var checkbox =document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", "");
    checkbox.setAttribute("id", "check"+index);
    checkbox.setAttribute("class", "checkselect")
    
   // checkbox.setAttribute("checked", "")
    

    var checkboxdiv=document.getElementById("checkbox");
    checkboxdiv.appendChild(checkbox);
}
function removecheckbox(id){
    if(index != 0){
        var contentid = document.getElementById("checkbox");
        var tbx = document.getElementById("check"+index); 
        contentid.removeChild(tbx);
        index=index-1;
    }
}


var allele;
 function checkall(){
     allele = document.getElementsByClassName("checkselect");
     for(i=0;i<allele.length;i++){
         var idele=allele[i].getAttribute("id");
         document.getElementById(idele).checked=true;
         console.log(idele);
     }
    
}
function uncheckall(){
    allele = document.getElementsByClassName("checkselect");
    for(i=0;i<allele.length;i++){
        var idele=allele[i].getAttribute("id");
        document.getElementById(idele).checked=false;
        console.log(idele);
    }
   
}
function setcolor() {
    if ( document.getElementById("btn").className.match(/(?:^|\s)active(?!\S)/) ){
    
    var element = document.getElementById("btn");
    element.classList.remove("active");
}else{
    
    var element = document.getElementById("btn");
    element.classList.add("active");
}

 }
 

    
var slideIndex = 1;
//showSlides(slideIndex);
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("para");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" pactive", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " pactive";
  }  