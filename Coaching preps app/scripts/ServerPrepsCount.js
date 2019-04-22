function countGaroz(firstDate,endDate){

  var query = app.models.Preps.newQuery();
  var results = [];
  
  var date1 = new Date(firstDate);
  var date2 = new Date(endDate);
 
  query.filters.SubmittedBy._equals = "gabriel.garoz";
  query.filters.Date._greaterThanOrEquals = date1;
  query.filters.Date._lessThanOrEquals = date2;
  
  results = query.run();
  return results.length;

}

function countJosue(firstDate,endDate){

  var query = app.models.Preps.newQuery();
  var results = [];
  
  var date1 = new Date(firstDate);
  var date2 = new Date(endDate);
  
  query.filters.SubmittedBy._equals = "josue.motta";
  query.filters.Date._greaterThanOrEquals = date1;
  query.filters.Date._lessThanOrEquals = date2;
  
  results = query.run();
  return results.length;

}

function countSergio(firstDate,endDate){

  var query = app.models.Preps.newQuery();
  var results = [];
  
  var date1 = new Date(firstDate);
  var date2 = new Date(endDate);
  
  query.filters.SubmittedBy._equals = "sergio.herrera";
  query.filters.Date._greaterThanOrEquals = date1;
  query.filters.Date._lessThanOrEquals = date2;
  
  results = query.run();
  return results.length;

}

function countAlbeiro(firstDate,endDate){

  var query = app.models.Preps.newQuery();
  var results = [];
  
  var date1 = new Date(firstDate);
  var date2 = new Date(endDate);
  
  query.filters.SubmittedBy._equals = "albeiro.martinez";
  query.filters.Date._greaterThanOrEquals = date1;
  query.filters.Date._lessThanOrEquals = date2;
  
  results = query.run();
  return results.length;

}


function countManuel(firstDate,endDate){

  var query = app.models.Preps.newQuery();
  var results = [];
  
  var date1 = new Date(firstDate);
  var date2 = new Date(endDate);
  
  query.filters.SubmittedBy._equals = "manuel.urrutia";
  query.filters.Date._greaterThanOrEquals = date1;
  query.filters.Date._lessThanOrEquals = date2;
  
  results = query.run();
  return results.length;

}


function countFernando(firstDate,endDate){

  var query = app.models.Preps.newQuery();
  var results = [];
  
  var date1 = new Date(firstDate);
  var date2 = new Date(endDate);
  
  query.filters.SubmittedBy._equals = "fernando.monteneg2";
  query.filters.Date._greaterThanOrEquals = date1;
  query.filters.Date._lessThanOrEquals = date2;
  
  results = query.run();
  return results.length;

}

function countMiriam(firstDate,endDate){

  var query = app.models.Preps.newQuery();
  var results = [];
  
  var date1 = new Date(firstDate);
  var date2 = new Date(endDate);
  
  query.filters.SubmittedBy._equals = "miriam.zuniga";
  query.filters.Date._greaterThanOrEquals = date1;
  query.filters.Date._lessThanOrEquals = date2;
  
  results = query.run();
  return results.length;

}


function countCortez(firstDate,endDate){

  var query = app.models.Preps.newQuery();
  var results = [];
  
  var date1 = new Date(firstDate);
  var date2 = new Date(endDate);
  
  query.filters.SubmittedBy._equals = "raul.cortez";
  query.filters.Date._greaterThanOrEquals = date1;
  query.filters.Date._lessThanOrEquals = date2;
  
  results = query.run();
  return results.length;

}


function countMorales(firstDate,endDate){

  var query = app.models.Preps.newQuery();
  var results = [];
  
  var date1 = new Date(firstDate);
  var date2 = new Date(endDate);
  
  query.filters.SubmittedBy._equals = "hector.morales";
  query.filters.Date._greaterThanOrEquals = date1;
  query.filters.Date._lessThanOrEquals = date2;
  
  results = query.run();
  return results.length;

}

function countPereda(firstDate,endDate){

  var query = app.models.Preps.newQuery();
  var results = [];
  
  var date1 = new Date(firstDate);
  var date2 = new Date(endDate);
  
  query.filters.SubmittedBy._equals = "Carlos.Pereda";
  query.filters.Date._greaterThanOrEquals = date1;
  query.filters.Date._lessThanOrEquals = date2;
  
  results = query.run();
  return results.length;

}

function countMario(firstDate,endDate){

  var query = app.models.Preps.newQuery();
  var results = [];
  
  var date1 = new Date(firstDate);
  var date2 = new Date(endDate);
  
  query.filters.SubmittedBy._equals = "mario.polanco";
  query.filters.Date._greaterThanOrEquals = date1;
  query.filters.Date._lessThanOrEquals = date2;
  
  results = query.run();
  return results.length;

}


function countMonge(firstDate,endDate){

  var query = app.models.Preps.newQuery();
  var results = [];
  
  var date1 = new Date(firstDate);
  var date2 = new Date(endDate);
  
  query.filters.SubmittedBy._equals = "ana.monge2";
  query.filters.Date._greaterThanOrEquals = date1;
  query.filters.Date._lessThanOrEquals = date2;
  
  results = query.run();
  return results.length;

}

// COUNT # PREPS SUBMITTED
// @param Supervisor selected

function countSup(supName, firstDate,endDate){

  var arrResults = [];
  
  var preQuery = app.models.Supervisors.newQuery();
  preQuery.filters.Name._equals = supName;
  var thisSup = preQuery.run();
  var thisUsername = thisSup[0].Username;
    
  var query = app.models.Preps.newQuery();
  var results = [];
  
  var date1 = new Date(firstDate);
  var date2 = new Date(endDate);
  
  // WEEK VARIABLES
  
  var firstWeek = new Date(2018,month,1);
  var endWeek1 = new Date(2018,month,7);
  
  var secondWeek = new Date(2018,month,8);
  var endWeek2 = new Date(2018,month,14);
  
  var thirdWeek = new Date(2018,month,15);
  var endWeek3 = new Date(2018,month,21);
  
  var fourthWeek = new Date(2018,month,22);
  var endWeek4 = new Date(2018,month+1,0);
  
  query.filters.SubmittedBy._equals = thisUsername;
  query.filters.Date._greaterThanOrEquals = date1;
  query.filters.Date._lessThanOrEquals = date2;
  
  results = query.run();
  var length = results.length;
  arrResults[0] = length;
  console.log(supName+' submitted # of Preps: '+results.length);
    
  return arrResults;

}

function countSupWeekly(agent){
  
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









