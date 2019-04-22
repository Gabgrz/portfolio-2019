function getTimestamp() {
  var myDate = new Date();
  var myHour = myDate.getHours();
  var myMin = myDate.getMinutes();
  var mySec = myDate.getSeconds();
  var timestamp = myDate.toDateString();
  return timestamp;
}

function getTimestamp1(){
  var myDate = new Date();
  var timestamp = myDate.toISOString();
  return timestamp;
}

function getTimestamp2(){
  var myDate = new Date();
  var timestamp = myDate.toLocaleDateString();
  return timestamp;
}



function getTimestamp4(){
  var myDate = new Date();
  var timestamp = myDate.toLocaleTimeString();
  return timestamp;
}

function getTimestamp5(){
  var myDate = new Date();
  var timestamp = myDate.toString();
  return timestamp;
}

function getTimestamp6(){
  var myDate = new Date();
  var timestamp = myDate.toTimeString();
  return timestamp;
}

function getTimestamp7(){
  var myDate = new Date();
  var timestamp = myDate.toUTCString();
  return timestamp;
}


function timeToRecord(){
  var myDate = new Date();
  var timestamp = myDate.toLocaleString();
  return timestamp;
}

function setTimestamp(){

  app.pages.PrepForm.descendants.FormPrep.datasource.item.Timestamp = getTimestamp3();
  
  
}


function assignQueryParam(){

  var myUsername = app.user.username;
  app.models.Agents.datasources.AgentsBySups.query.parameters.myUsername = myUsername;
  app.models.Preps.datasources.PrepsBySup.query.parameters.Username = myUsername;
  app.models.Preps.datasources.PrepsByTimestamp.query.parameters.Username = myUsername;

}

function getMyself (){

  var myUsername = app.user.username;
  app.models.Supervisors.datasources.MeDatasource.query.parameters.myUsername = myUsername;
  app.datasources.AgentsBySups.query.parameters.myUsername = myUsername;
  
    

}

assignQueryParam();


function clearDropdown(){
    
    app.pages.MyPreps.descendants.DropdownAgent.value = null;
    app.pages.ManagersPage.descendants.DropdownAgent.value = null;
   
}

function resultsVisible(){
  if(app.pages.ManagersPage.descendants.DropdownAgent.value === null){
    
      
      app.datasources.Preps.unload();
  }
}


resultsVisible();