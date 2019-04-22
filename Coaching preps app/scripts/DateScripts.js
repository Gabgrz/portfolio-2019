var ManagersPage = app.pages.ManagersPage;
var props = ManagersPage.properties;
var mainPageDesc = ManagersPage.descendants;
var calInitialDate = mainPageDesc.DateBoxFirstDate.value;
var todayDate = new Date();

var myPrepsPage2 = app.pages.MyPreps;
var props2 = myPrepsPage2.properties;
var myPrepsPageDesc2 = myPrepsPage2.descendants;



function setMtd(){

  var month = todayDate.getMonth();
  var newInitialDate = new Date(2018,month,01);
  var newEndDate = new Date(2018,month+1,0);
  mainPageDesc.DateBoxFirstDate.value = newInitialDate;
  mainPageDesc.DateBoxEndDate.value = newEndDate;
  
  myPrepsPageDesc2.DateBoxFirstDate.value = newInitialDate;
  myPrepsPageDesc2.DateBoxEndDate.value = newEndDate;
    
}

function setLastMonth(){

  var month = todayDate.getMonth();
  var newInitialDate = new Date(2018,month-1,01);
  var newEndDate = new Date(2018,month,0);
  mainPageDesc.DateBoxFirstDate.value = newInitialDate;
  mainPageDesc.DateBoxEndDate.value = newEndDate;
  
  myPrepsPageDesc2.DateBoxFirstDate.value = newInitialDate;
  myPrepsPageDesc2.DateBoxEndDate.value = newEndDate;
  
}

function showPrepsByMonth(){

  var month;
  var newInitialDate;
  var newEndDate;
  
  month = mainPageDesc.DropdownMonths.value;
  
  switch(month){
  
    case 'January':
      newInitialDate = new Date(2018,0,01);
      newEndDate = new Date(2018,01,0);
      mainPageDesc.DateBoxFirstDate.value = newInitialDate;
      mainPageDesc.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'February':
      newInitialDate = new Date(2018,01,01);
      newEndDate = new Date(2018,02,0);
      mainPageDesc.DateBoxFirstDate.value = newInitialDate;
      mainPageDesc.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'March':
      newInitialDate = new Date(2018,02,01);
      newEndDate = new Date(2018,03,0);
      mainPageDesc.DateBoxFirstDate.value = newInitialDate;
      mainPageDesc.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'April':
      newInitialDate = new Date(2018,03,01);
      newEndDate = new Date(2018,04,0);
      mainPageDesc.DateBoxFirstDate.value = newInitialDate;
      mainPageDesc.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'May':
      newInitialDate = new Date(2018,04,01);
      newEndDate = new Date(2018,05,0);
      mainPageDesc.DateBoxFirstDate.value = newInitialDate;
      mainPageDesc.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'June':
      newInitialDate = new Date(2018,05,01);
      newEndDate = new Date(2018,06,0);
      mainPageDesc.DateBoxFirstDate.value = newInitialDate;
      mainPageDesc.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'July':
      newInitialDate = new Date(2018,06,01);
      newEndDate = new Date(2018,07,0);
      mainPageDesc.DateBoxFirstDate.value = newInitialDate;
      mainPageDesc.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'August':
      newInitialDate = new Date(2018,07,01);
      newEndDate = new Date(2018,08,0);
      mainPageDesc.DateBoxFirstDate.value = newInitialDate;
      mainPageDesc.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'September':
      newInitialDate = new Date(2018,08,01);
      newEndDate = new Date(2018,09,0);
      mainPageDesc.DateBoxFirstDate.value = newInitialDate;
      mainPageDesc.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'October':
      newInitialDate = new Date(2018,09,01);
      newEndDate = new Date(2018,10,0);
      mainPageDesc.DateBoxFirstDate.value = newInitialDate;
      mainPageDesc.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'November':
      newInitialDate = new Date(2018,10,01);
      newEndDate = new Date(2018,11,0);
      mainPageDesc.DateBoxFirstDate.value = newInitialDate;
      mainPageDesc.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'December':
      newInitialDate = new Date(2018,11,01);
      newEndDate = new Date(2018,12,0);
      mainPageDesc.DateBoxFirstDate.value = newInitialDate;
      mainPageDesc.DateBoxEndDate.value = newEndDate;
  
  }

}

function showPrepsByMonth2(){

  var month;
  var newInitialDate;
  var newEndDate;
  
  month = myPrepsPageDesc2.DropdownMonths.value;
  
  switch(month){
  
    case 'January':
      newInitialDate = new Date(2018,0,01);
      newEndDate = new Date(2018,01,0);
      myPrepsPageDesc2.DateBoxFirstDate.value = newInitialDate;
      myPrepsPageDesc2.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'February':
      newInitialDate = new Date(2018,01,01);
      newEndDate = new Date(2018,02,0);
      myPrepsPageDesc2.DateBoxFirstDate.value = newInitialDate;
      myPrepsPageDesc2.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'March':
      newInitialDate = new Date(2018,02,01);
      newEndDate = new Date(2018,03,0);
      myPrepsPageDesc2.DateBoxFirstDate.value = newInitialDate;
      myPrepsPageDesc2.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'April':
      newInitialDate = new Date(2018,03,01);
      newEndDate = new Date(2018,04,0);
      myPrepsPageDesc2.DateBoxFirstDate.value = newInitialDate;
      myPrepsPageDesc2.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'May':
      newInitialDate = new Date(2018,04,01);
      newEndDate = new Date(2018,05,0);
      myPrepsPageDesc2.DateBoxFirstDate.value = newInitialDate;
      myPrepsPageDesc2.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'June':
      newInitialDate = new Date(2018,05,01);
      newEndDate = new Date(2018,06,0);
      myPrepsPageDesc2.DateBoxFirstDate.value = newInitialDate;
      myPrepsPageDesc2.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'July':
      newInitialDate = new Date(2018,06,01);
      newEndDate = new Date(2018,07,0);
      myPrepsPageDesc2.DateBoxFirstDate.value = newInitialDate;
      myPrepsPageDesc2.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'August':
      newInitialDate = new Date(2018,07,01);
      newEndDate = new Date(2018,08,0);
      myPrepsPageDesc2.DateBoxFirstDate.value = newInitialDate;
      myPrepsPageDesc2.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'September':
      newInitialDate = new Date(2018,08,01);
      newEndDate = new Date(2018,09,0);
      myPrepsPageDesc2.DateBoxFirstDate.value = newInitialDate;
      myPrepsPageDesc2.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'October':
      newInitialDate = new Date(2018,09,01);
      newEndDate = new Date(2018,10,0);
      myPrepsPageDesc2.DateBoxFirstDate.value = newInitialDate;
      myPrepsPageDesc2.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'November':
      newInitialDate = new Date(2018,10,01);
      newEndDate = new Date(2018,11,0);
      myPrepsPageDesc2.DateBoxFirstDate.value = newInitialDate;
      myPrepsPageDesc2.DateBoxEndDate.value = newEndDate;
      break;
      
    case 'December':
      newInitialDate = new Date(2018,11,01);
      newEndDate = new Date(2018,12,0);
      myPrepsPageDesc2.DateBoxFirstDate.value = newInitialDate;
      myPrepsPageDesc2.DateBoxEndDate.value = newEndDate;
  
  }

}




// LINEEEEEEEEEEEEEEEEEEEEEE







function last4Weeks(){
  
  
  
}

function last4Preps(){
  
  
  
}