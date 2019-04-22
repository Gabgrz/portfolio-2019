function agentCount(agentArr){
  
  var query = app.models.Preps.newQuery();
  
  var result = [];
  var myAgents = [];
   
  /*
  
  var myList = ['haha','haha','hehe','hehe','hehe','hehe'];
  var query = app.models.Test.newQuery();
  
  */
  
  myAgents = agentArr;
  
  console.log(myAgents);
  
  for (var i = 0, len = myAgents.length; i < len; i++){
  
      var length = 0;
      query.filters.relAgents.Name._equals = myAgents[i];
      length = query.run().length;
      result[i] = length;
      // console.log(result[i]);
  
  }
  
  console.log(result);
  return result;
  
}

function isWeeklyPrep(agent){
  
  // agent = 'Roberto Tavico';
  var monthlyPrep = [false,false,false,false];
  var query = app.models.Agents.newQuery();

  // var month = query.parameters.InitialDate.getMonth();
  var  month = 4;  

  var firstWeek = new Date(2018,month,1);
  var endWeek1 = new Date(2018,month,7);
  
  var secondWeek = new Date(2018,month,8);
  var endWeek2 = new Date(2018,month,14);
  
  var thirdWeek = new Date(2018,month,15);
  var endWeek3 = new Date(2018,month,21);
  
  var fourthWeek = new Date(2018,month,22);
  var endWeek4 = new Date(2018,month+1,0);

  query.filters.Name._equals = agent;
  query.filters.relPreps.Date._greaterThanOrEquals = firstWeek;
  query.filters.relPreps.Date._lessThanOrEquals = endWeek1;

  if(query.run().length !== 0){

     console.log(query.run().join());
     monthlyPrep[0] = true;
     console.log('Agent has a Prep in the first week: '+monthlyPrep[0]);
  }
  else{
    console.log('Agent does NOT have a Prep in the first week: '+monthlyPrep[0]);
  }
  
  // SECOND WEEK
  
  query.filters.relPreps.Date._greaterThanOrEquals = secondWeek;
  query.filters.relPreps.Date._lessThanOrEquals = endWeek2;

  if(query.run().length !== 0){

     console.log(query.run().join());
     monthlyPrep[1] = true;
     console.log('Agent has a Prep in the second week: '+monthlyPrep[1]);
  }
  else{
    console.log('Agent does NOT have a Prep in the second week: '+monthlyPrep[1]);
  }
  
  // THIRD WEEK
  
  query.filters.relPreps.Date._greaterThanOrEquals = thirdWeek;
  query.filters.relPreps.Date._lessThanOrEquals = endWeek3;
  
  if(query.run().length !== 0){

     console.log(query.run().join());
     monthlyPrep[2] = true;
     console.log('Agent has a Prep in the third week: '+monthlyPrep[2]);
  }
  else{
    console.log('Agent does NOT have a Prep in the third week: '+monthlyPrep[2]);
  }
  
    // FOURTH WEEK
  
  query.filters.relPreps.Date._greaterThanOrEquals = fourthWeek;
  query.filters.relPreps.Date._lessThanOrEquals = endWeek4;
  
  console.log(fourthWeek+' '+endWeek4);
  
  if(query.run().length !== 0){

     console.log(query.run().join());
     monthlyPrep[3] = true;
     console.log('Agent has a Prep in the fourth week: '+monthlyPrep[3]);
  }
  else{
    console.log(query.run().length);
    console.log('Agent does NOT have a Prep in the fourth week: '+monthlyPrep[3]);
  }
  
  // RETURN STATEMENT
    
  return monthlyPrep;
  
}

// WEEK 1 FUNCTION

function isPrepWeekOne(agentArr){
  
  // agent = 'Roberto Tavico';
  var prepWeekOneList = [];
  var query = app.models.Agents.newQuery();

  // var month = query.parameters.InitialDate.getMonth();
  var  month = 4;
  
  var myAgents = [];
  
  myAgents = agentArr;

  var firstWeek = new Date(2018,month,1);
  var endWeek1 = new Date(2018,month,7);
  
  for (var i = 0, len = myAgents.length; i < len; i++){
  
    query.filters.Name._equals = myAgents[i];
    query.filters.relPreps.Date._greaterThanOrEquals = firstWeek;
    query.filters.relPreps.Date._lessThanOrEquals = endWeek1;
    
    if(query.run().length !== 0){
      console.log(query.run().join());
      prepWeekOneList[i] = true;
      console.log('Agent '+ myAgents[i]+' has a Prep in the first week: '+prepWeekOneList[i]);
    }
    
    else{
      prepWeekOneList[i] = false;
      console.log('Agent '+ myAgents[i]+' does NOT have a Prep in the first week: '+prepWeekOneList[i]);
    }
  
  }
  return prepWeekOneList;
}


// WEEK 2 FUNCTION

function isPrepWeekTwo(agentArr){
  
  // agent = 'Roberto Tavico';
  var prepWeekList = [];
  var query = app.models.Agents.newQuery();

  // var month = query.parameters.InitialDate.getMonth();
  var  month = 4;
  
  var myAgents = [];
  
  myAgents = agentArr;

  var startWeek = new Date(2018,month,8);
  var endWeek = new Date(2018,month,14);
  
  for (var i = 0, len = myAgents.length; i < len; i++){
  
    query.filters.Name._equals = myAgents[i];
    query.filters.relPreps.Date._greaterThanOrEquals = startWeek;
    query.filters.relPreps.Date._lessThanOrEquals = endWeek;
    
    if(query.run().length !== 0){
      console.log(query.run().join());
      prepWeekList[i] = true;
      console.log('Agent '+ myAgents[i]+' has a Prep in the second week: '+prepWeekList[i]);
    }
    
    else{
      prepWeekList[i] = false;
      console.log('Agent '+ myAgents[i]+' does NOT have a Prep in the second week: '+prepWeekList[i]);
    }
  
  }
  return prepWeekList;
}

// WEEK 3 FUNCTION

function isPrepWeekThree(agentArr){
  
  // agent = 'Roberto Tavico';
  var prepWeekList = [];
  var query = app.models.Agents.newQuery();

  // var month = query.parameters.InitialDate.getMonth();
  var  month = 4;
  
  var myAgents = [];
  
  myAgents = agentArr;

  var startWeek = new Date(2018,month,15);
  var endWeek = new Date(2018,month,21);
  
  for (var i = 0, len = myAgents.length; i < len; i++){
  
    query.filters.Name._equals = myAgents[i];
    query.filters.relPreps.Date._greaterThanOrEquals = startWeek;
    query.filters.relPreps.Date._lessThanOrEquals = endWeek;
    
    if(query.run().length !== 0){
      console.log(query.run().join());
      prepWeekList[i] = true;
      console.log('Agent '+ myAgents[i]+' has a Prep in the third week: '+prepWeekList[i]);
    }
    
    else{
      prepWeekList[i] = false;
      console.log('Agent '+ myAgents[i]+' does NOT have a Prep in the third week: '+prepWeekList[i]);
    }
  
  }
  return prepWeekList;
}

// WEEK 4 FUNCTION

function isPrepWeekFour(agentArr){
  
  // agent = 'Roberto Tavico';
  var prepWeekList = [];
  var query = app.models.Agents.newQuery();

  // var month = query.parameters.InitialDate.getMonth();
  var  month = 4;
  
  var myAgents = [];
  
  myAgents = agentArr;

  var startWeek = new Date(2018,month,22);
  console.log(startWeek);
  var endWeek = new Date(2018,month+1,0);
  console.log(endWeek);
  for (var i = 0, len = myAgents.length; i < len; i++){
  
    query.filters.Name._equals = myAgents[i];
    query.filters.relPreps.Date._greaterThanOrEquals = startWeek;
    query.filters.relPreps.Date._lessThanOrEquals = endWeek;
    
    if(query.run().length !== 0){
      console.log(query.run().join());
      prepWeekList[i] = true;
      console.log('Agent '+ myAgents[i]+' has a Prep in the fourth week: '+prepWeekList[i]);
    }
    
    else{
      prepWeekList[i] = false;
      console.log('Agent '+ myAgents[i]+' does NOT have a Prep in the fourth week: '+prepWeekList[i]);
    }
  
  }
  return prepWeekList;
}

/*

var arr = [];
arr[0] = 'Roberto Tavico';
arr[1] = 'Marvin Reyes';
console.log('Array length is '+arr);

isPrepWeekOne(arr);


isWeeklyPrep();

*/










