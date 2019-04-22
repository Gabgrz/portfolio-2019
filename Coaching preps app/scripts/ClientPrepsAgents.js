function getAgents(){

  var agentsArr = [];
  var itemsAgents = app.datasources.AgentsAnaly.items;
  var len = itemsAgents.length;
  
  for (var i = 0; i < len; i++){
  
    agentsArr[i] = itemsAgents[i].Name;
  
  }
  
  console.log(agentsArr);
  return agentsArr;

}

var controller = -1;
var controller2 = -1;
var controller3 = -1;
var controller4 = -1;
var controller5 = -1;

function count(){

    console.log(controller);
    controller++;
    return controller;
  
}

function count2(){

    console.log(controller2);
    controller2++;
    return controller2;
  
}


function count3(){

    console.log(controller3);
    controller3++;
    return controller3;
  
}

function count4(){

    console.log(controller4);
    controller4++;
    return controller4;
  
}

function resetNum(){

  controller = -1;
  console.log(controller);
  return controller;
  
}


function resetNum2(){

  controller2 = -1;
  console.log(controller2);
  return controller2;
  
}


function resetNum3(){

  controller3 = -1;
  console.log(controller3);
  return controller3;
  
}


function resetNum4(){

  controller4 = -1;
  console.log(controller4);
  return controller4;
  
}

function myFunc(){

  setTimeout(function getList(){

    resetNum();

    var analyPage2 = app.pages.Analytics;
    var analyPreps2 = analyPage2.properties;

    var thisList = getAgents();

    google.script.run.withSuccessHandler(
      function myList(list){

        analyPreps2.CounterList = list;
        console.log('myFunc Execution ' +list);


      })
      .agentCount(thisList);

  },5000);
  
}



/*

function getList(){
  
  resetNum();
  
  var analyPage2 = app.pages.Analytics;
  var analyPreps2 = analyPage2.properties;

  var thisList = getAgents();
  
  google.script.run.withSuccessHandler(
    function myList(list){
      
      analyPreps2.CounterList = list;
      console.log(list);
            
    
    })
    .agentCount(thisList);
  
}

*/



// Shows if an agent has a prep submitted on each week of the month.

function isWeeklyPrep(agent){
   
  // agent = 'Roberto Tavico'; 
  
  var analyPage2 = app.pages.Analytics;
  var analyPreps2 = analyPage2.properties;
  var result = [];
  
  var random = 'FAIL';
  
  console.log('Agent: '+agent);
  
  google.script.run
    .withSuccessHandler(
    function myBoolArr(boolArr){
      
      for (var i = 0; i < 4; i++){
        analyPreps2.FirstWeek = boolArr[i].toString();
        analyPreps2.IsWeeklyPrep[i] = boolArr[i]; 
        console.log('First client value: '+analyPreps2.IsWeeklyPrep[i]);
      }
    })
    .isWeeklyPrep(agent);
  
  /*
  
  result = analyPreps2.IsWeeklyPrep;
    console.log(result);
    return result;
  
  */
    
  
}

// Implementing isWeeklyPrep(agent)

function isWeeklyPrepAllAgents(){
  
  setTimeout(function getList(){
  
  resetNum();

  var analyPage2 = app.pages.Analytics;
  var analyPreps2 = analyPage2.properties;
  
  var listOfBools = [];
  var myAgents = getAgents();
  console.log('MY AGENTS ARE: '+myAgents);
  
  for (var i = 0, len = myAgents.length-1; i < len; i++){
  
    isWeeklyPrep(myAgents[i]);
    listOfBools[i] = analyPreps2.IsWeeklyPrep;
  }
  
  return listOfBools;
    
  },3000);
  
}


function addListOfBools(){

  var analyPage2 = app.pages.Analytics;
  var analyPreps2 = analyPage2.properties;
  var myBool = true;
  
  analyPreps2.ListOfBools[0] = myBool;
  analyPreps2.ListOfBools[0][0] = myBool;

}

function addListOfDynamic(){

  var analyPage2 = app.pages.Analytics;
  var analyPreps2 = analyPage2.properties;
  var myBool = true;
  
  analyPreps2.DynamicProp[0] = myBool;
  // analyPreps2.DynamicProp[0][0] = myBool;

}

// FIRST WEEK FUNCTION

function isPrepWeekOne(){
  
  setTimeout(function getList(){
  
  resetNum();

  var analyPage2 = app.pages.Analytics;
  var analyPreps2 = analyPage2.properties;
  
  var myAgents = getAgents();
    
  google.script.run.withSuccessHandler(
    function myList(list){

      analyPreps2.isWeekOne = list;
      console.log('First Week Execution ' +list);

    })
    .isPrepWeekOne(myAgents);

  },5000);
  
}

// SECOND WEEK FUNCTION

function isPrepWeekTwo(){
  
  setTimeout(function getList(){
  
  resetNum2();

  var analyPage2 = app.pages.Analytics;
  var analyPreps2 = analyPage2.properties;
  
  var myAgents = getAgents();
    
  google.script.run.withSuccessHandler(
    function myList(list){
      
      analyPreps2.isWeekTwo = list;
      console.log('Second Week Execution ' +list);

    })
    .isPrepWeekTwo(myAgents);

  },5000);
  
}

// THIRD WEEK FUNCTION

function isPrepWeekThree(){
  
  setTimeout(function getList(){
  
  resetNum3();

  var analyPage2 = app.pages.Analytics;
  var analyPreps2 = analyPage2.properties;
  
  var myAgents = getAgents();
    
  google.script.run.withSuccessHandler(
    function myList(list){
      
      analyPreps2.isWeekThree = list;
      console.log('Third Week Execution ' +list);

    })
    .isPrepWeekThree(myAgents);

  },5000);
  
}

// FOURTH WEEK FUNCTION

function isPrepWeekFour(){
  
  setTimeout(function getList(){
  
  resetNum4();

  var analyPage2 = app.pages.Analytics;
  var analyPreps2 = analyPage2.properties;
  
  var myAgents = getAgents();
    
  google.script.run.withSuccessHandler(
    function myList(list){
      
      analyPreps2.isWeekFour = list;
      console.log('Fourth Week Execution ' +list);

    })
    .isPrepWeekFour(myAgents);

  },5000);
  
}

function allIsWeeklyPrep(){

   
   isPrepWeekOne();
   isPrepWeekTwo();
   isPrepWeekThree();
   isPrepWeekFour();

}



