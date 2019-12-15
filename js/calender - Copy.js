let today=new Date();
let currentmonth=today.getMonth();
let currentyear=today.getFullYear();
let currentdate = today.getDate();
let weekdayno = today.getDay();
var getDaysInMonth = function(month,year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
   return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
  };
  var getCurrentMonthstartday=function(month,year){
    let d = new Date(year,month,1);
    return d.getDay();
    //console.log(n);
  };
  
  function previousmonth(){
     currentmonth= document.getElementById("monthselect").value;
    
     currentyear = (currentmonth === 0) ? currentyear - 1 : currentyear;
    currentmonth = (currentmonth === 0) ? 11 : currentmonth - 1;
    var elementmaindiv =  document.getElementById('maindivid');
    
    var elementtbl=  document.getElementById('tblid');
    if (typeof(elementtbl) != 'undefined' && elementtbl != null)
    {
      elementtbl.remove();  
    }
   
    showCalendar(currentmonth, currentyear);
      
    //console.log("hello");
   // showCalendar(10,2019);
  }
  function nextmonth(){
   currentmonth= document.getElementById("monthselect").value;
    
    currentyear = (currentmonth === 11) ? currentyear + 1 : currentyear;
    currentmonth = (currentmonth + 1) % 12;
  
    var elementtbl=  document.getElementById('tblid');
    if (typeof(elementtbl) != 'undefined' && elementtbl != null)
    {
      elementtbl.remove();  
    }
   
    showCalendar(currentmonth, currentyear);
  
  }
 //getCurrentMonthstartday(10,2019);
  function listmonth(){

    var selectedmonth = document.getElementById("monthselect").value;
            //var strUser = e.options[e.createselect].value;
// strUser-1 == currentmonth;
currentmonth = selectedmonth;
 showCalendar(currentmonth,currentyear);
  }

  var weekdays = new Array(7);
  weekdays[0] = "Sun";
  weekdays[1] = "Mon";
  weekdays[2] = "Tues";
  weekdays[3] = "Wed";
  weekdays[4] = "Thurs";
  weekdays[5] = "Fri";
  weekdays[6] = "Sat";

  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  
  function showCalendar(currentmonth,currentyear){

      var maindivele=document.getElementById("maindivid");
      
       if (typeof(maindivele) == 'undefined' || maindivele == null)
      {
        var maindiv = document.createElement("div");
      maindiv.setAttribute("id","maindivid");
      var creatediv = document.createElement("div");
      var createselect= document.createElement("select");
      createselect.setAttribute("id","monthselect");
      for(let m = 0; m <= 11; m++) {
      var optn = document.createElement("OPTION");
      optn.text = month[m];
      // server side month start from one
      optn.value = (m);
      if ( m == currentmonth) {
      optn.selected = true;
      }
      createselect.appendChild(optn);
      }
      creatediv.appendChild(createselect);
      let previousbutton = document.createElement("button");
      let previoustext = document.createTextNode("<<");
      previousbutton.appendChild(previoustext);
      let nextpreviousbutton = document.createElement("button");
      let nextprevioustext = document.createTextNode(">>");
      nextpreviousbutton.appendChild(nextprevioustext);     
      maindiv.appendChild(previousbutton);
      maindiv.appendChild(creatediv);
      maindiv.appendChild(nextpreviousbutton); 
      document.getElementsByTagName("BODY")[0].appendChild(maindiv);
      previousbutton.addEventListener("click", previousmonth);
nextpreviousbutton.addEventListener("click", nextmonth);
createselect.addEventListener("change", listmonth);
      
      }
      // var elementmaindiv=  document.getElementById('maindivid');
      // if (typeof(elementmaindiv) != 'undefined' && elementmaindiv != null)
      // {
      //   previousbutton.addEventListener("click", previousmonth);
      //   nextpreviousbutton.addEventListener("click", nextmonth);
      //   createselect.addEventListener("change", listmonth); 
      // }
      
          
      var tbl = document.createElement("table");
      tbl.setAttribute("id","tblid");
      var tblBody = document.createElement("tbody");
      var rowhead = document.createElement("tr");
      for(k=0;k<7;k++){
        var headcell = document.createElement("th");
        var headcelltext = document.createTextNode(weekdays[k]);
        headcell.appendChild(headcelltext);
        rowhead.appendChild(headcell);
      }
    tblBody.appendChild(rowhead);    
     // cells creation
     let dayno=1;
     let createfirstrow=true;
     for (var j = 0; j <= 5; j++) {
      // table row creation
      var row = document.createElement("tr");
      for (var i = 0; i < 7; i++) {
         let startdayfrom = getCurrentMonthstartday(currentmonth,currentyear);
         if(createfirstrow){
          if(i>=startdayfrom){
            var cell = document.createElement("td");
            var cellText = document.createTextNode(dayno);
            dayno++;
           }else{
            var cell = document.createElement("td");
            var cellText = document.createTextNode(" ");
           }  
  
         }
         else{
           if(dayno<=getDaysInMonth(currentmonth,currentyear)){
            var cell = document.createElement("td");
            var cellText = document.createTextNode(dayno);
            dayno++;
           }
           else{
            var cell = document.createElement("td");
            var cellText = document.createTextNode(" ");
           }
       
         }
            
         if (dayno-1 === today.getDate() && currentyear === today.getFullYear() && currentmonth === today.getMonth()) {
          cell.classList.add('hylightcurrentdate');
      } // color today's date
    
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        createfirstrow=false;
    
        //row added to end of table body
        tblBody.appendChild(row);
      }
    
      // append the <tbody> inside the <table>
      tbl.appendChild(tblBody);
      // tbl border attribute to 
      tbl.setAttribute("border", "2");
      var body = document.getElementsByTagName('body');
    
      // if (typeof(elementtbl) != 'undefined' && elementtbl != null)
      // {
      //   document.getElementsByTagName("BODY")[0].appendChild(tbl);
      
      // }
      document.getElementsByTagName("BODY")[0].appendChild(tbl);
     
      

 
           


 }
 
  
   showCalendar(currentmonth,currentyear);
   
  // document.getElementById("calenderid").appendChild(tbl)