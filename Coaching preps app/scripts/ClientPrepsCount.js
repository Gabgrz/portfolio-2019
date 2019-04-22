var analyProps = app.pages.Analytics.properties;
var analyPage = app.pages.Analytics;
var analyDesc = analyPage.descendants;

var analyV2Page = app.pages.AnalyticsV2;
var analyV2Props = app.pages.AnalyticsV2.properties;
var analyV2Desc = app.pages.AnalyticsV2.descendants;

function prepsMonthSup (){

  var month;
  var newInitialDate;
  var newEndDate;
  var dates = [];
  
  // month = analyDesc.DropdownMonth.value;
  month = analyV2Desc.DropdownMonth.value;
    
  switch(month){
  
    case 'January':
      newInitialDate = new Date(2018,0,01);
      newEndDate = new Date(2018,01,0);
      
      dates = [newInitialDate,newEndDate];
      break;
      
    case 'February':
      newInitialDate = new Date(2018,01,01);
      newEndDate = new Date(2018,02,0);
      
      dates = [newInitialDate,newEndDate];
      break;
      
    case 'March':
      newInitialDate = new Date(2018,02,01);
      newEndDate = new Date(2018,03,0);
      
      dates = [newInitialDate,newEndDate];
      break;
      
    case 'April':
      newInitialDate = new Date(2018,03,01);
      newEndDate = new Date(2018,04,0);
      
      dates = [newInitialDate,newEndDate];
      break;
      
    case 'May':
      newInitialDate = new Date(2018,04,01);
      newEndDate = new Date(2018,05,0);
      
      dates = [newInitialDate,newEndDate];
      break;
      
    case 'June':
      newInitialDate = new Date(2018,05,01);
      newEndDate = new Date(2018,06,0);
      
      dates = [newInitialDate,newEndDate];
      break;
      
    case 'July':
      newInitialDate = new Date(2018,06,01);
      newEndDate = new Date(2018,07,0);
      
      dates = [newInitialDate,newEndDate];
      break;
      
    case 'August':
      newInitialDate = new Date(2018,07,01);
      newEndDate = new Date(2018,08,0);
      
      dates = [newInitialDate,newEndDate];
      break;
      
    case 'September':
      newInitialDate = new Date(2018,08,01);
      newEndDate = new Date(2018,09,0);
      
      dates = [newInitialDate,newEndDate];
      break;
      
    case 'October':
      newInitialDate = new Date(2018,09,01);
      newEndDate = new Date(2018,10,0);
      
      dates = [newInitialDate,newEndDate];
      return dates;
      
    case 'November':
      newInitialDate = new Date(2018,10,01);
      newEndDate = new Date(2018,11,0);
      
      dates = [newInitialDate,newEndDate];
      break;
      
    case 'December':
      newInitialDate = new Date(2018,11,01);
      newEndDate = new Date(2018,12,0);
      
      dates = [newInitialDate,newEndDate];
      
  
  }
  
  return dates;
  
}


function countGaroz(){

  var dates = [];
  dates = prepsMonthSup();
  
  var firstDate = new Date();
  var endDate = new Date();
  
  firstDate = dates[0].toLocaleDateString();
  endDate = dates[1].toLocaleDateString();

  google.script.run.withSuccessHandler(function count(number){analyProps.CountGaroz = number;}).countGaroz(firstDate,endDate);
  
  console.log(firstDate);
  console.log(endDate);
}


function countJosue(){

  var dates = [];
  dates = prepsMonthSup();
  
  var firstDate = new Date();
  var endDate = new Date();
  
  firstDate = dates[0].toLocaleDateString();
  endDate = dates[1].toLocaleDateString();
  
  google.script.run.withSuccessHandler(function count(number){analyProps.CountJosue = number;}).countJosue(firstDate,endDate);

}

function countAlbeiro(){
  
  var dates = [];
  dates = prepsMonthSup();
  
  var firstDate = new Date();
  var endDate = new Date();
  
  firstDate = dates[0].toLocaleDateString();
  endDate = dates[1].toLocaleDateString();

  google.script.run.withSuccessHandler(function count(number){analyProps.CountAlbeiro = number;}).countAlbeiro(firstDate,endDate);

}

function countSergio(){
  
  var dates = [];
  dates = prepsMonthSup();
  
  var firstDate = new Date();
  var endDate = new Date();
  
  firstDate = dates[0].toLocaleDateString();
  endDate = dates[1].toLocaleDateString();

  google.script.run.withSuccessHandler(function count(number){analyProps.CountSergio = number;}).countSergio(firstDate,endDate);

}

function countMonge(){
  
  var dates = [];
  dates = prepsMonthSup();
  
  var firstDate = new Date();
  var endDate = new Date();
  
  firstDate = dates[0].toLocaleDateString();
  endDate = dates[1].toLocaleDateString();

  google.script.run.withSuccessHandler(function count(number){analyProps.CountMonge = number;}).countMonge(firstDate,endDate);

}

// LINEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE


function countManuel(){
  
  var dates = [];
  dates = prepsMonthSup();
  
  var firstDate = new Date();
  var endDate = new Date();
  
  firstDate = dates[0].toLocaleDateString();
  endDate = dates[1].toLocaleDateString();

  google.script.run.withSuccessHandler(function count(number){analyProps.CountManuel = number;}).countManuel(firstDate,endDate);

}

function countFernando(){
  
  var dates = [];
  dates = prepsMonthSup();
  
  var firstDate = new Date();
  var endDate = new Date();
  
  firstDate = dates[0].toLocaleDateString();
  endDate = dates[1].toLocaleDateString();

  google.script.run.withSuccessHandler(function count(number){analyProps.CountFernando = number;}).countFernando(firstDate,endDate);

}

function countMiriam(){
  
  var dates = [];
  dates = prepsMonthSup();
  
  var firstDate = new Date();
  var endDate = new Date();
  
  firstDate = dates[0].toLocaleDateString();
  endDate = dates[1].toLocaleDateString();

  google.script.run.withSuccessHandler(function count(number){analyProps.CountMiriam = number;}).countMiriam(firstDate,endDate);

}

function countCortez(){
  
  var dates = [];
  dates = prepsMonthSup();
  
  var firstDate = new Date();
  var endDate = new Date();
  
  firstDate = dates[0].toLocaleDateString();
  endDate = dates[1].toLocaleDateString();

  google.script.run.withSuccessHandler(function count(number){analyProps.CountCortez = number;}).countCortez(firstDate,endDate);

}

function countMorales(){
  
  var dates = [];
  dates = prepsMonthSup();
  
  var firstDate = new Date();
  var endDate = new Date();
  
  firstDate = dates[0].toLocaleDateString();
  endDate = dates[1].toLocaleDateString();

  google.script.run.withSuccessHandler(function count(number){analyProps.CountMorales = number;}).countMorales(firstDate,endDate);

}

function countPereda(){
  
  var dates = [];
  dates = prepsMonthSup();
  
  var firstDate = new Date();
  var endDate = new Date();
  
  firstDate = dates[0].toLocaleDateString();
  endDate = dates[1].toLocaleDateString();

  google.script.run.withSuccessHandler(function count(number){analyProps.CountPereda = number;}).countPereda(firstDate,endDate);

}

function countMario(){
  
  var dates = [];
  dates = prepsMonthSup();
  
  var firstDate = new Date();
  var endDate = new Date();
  
  firstDate = dates[0].toLocaleDateString();
  endDate = dates[1].toLocaleDateString();

  google.script.run.withSuccessHandler(function count(number){analyProps.CountPolanco = number;}).countMario(firstDate,endDate);

}




// LINEEEEEEEE

function countAll(){

  countGaroz();
  countJosue();
  countAlbeiro();
  countSergio();
  countMonge();
  countManuel();
  countFernando();
  countMiriam();
  countCortez();
  countMorales();
  countPereda();
  countMario();

}

function countBySup(){

  var dates = [];
  dates = prepsMonthSup();
  
  var firstDate = new Date();
  var endDate = new Date();
  
  var supName = analyV2Desc.DropdownSupervisor.value;
  
  firstDate = dates[0].toLocaleDateString();
  endDate = dates[1].toLocaleDateString();

  google.script.run.withSuccessHandler(function count(number){analyV2Props.CountBySup = number[0];}).countSup(supName, firstDate,endDate);

}








