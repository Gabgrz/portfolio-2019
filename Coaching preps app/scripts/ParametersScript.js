var prepsParam = app.datasources.Preps.query.parameters;




function assignPrepsByKpiParams(){
  
   // || app.pages.MainPage.descendants.DropdownAgent.value !== null
  
  if(app.pages.ManagersPage.descendants.DropdownSupervisor.value !== null){
  
    app.datasources.Preps.query.parameters.ManagerSupervisor = app.pages.ManagersPage.descendants.DropdownSupervisor.value.Name;
  
  }
  else{app.datasources.Preps.query.parameters.ManagerSupervisor = null;}
  
  if(app.pages.ManagersPage.descendants.DropdownKpi.value !== null){
  
    // app.datasources.Preps.query.parameters.FirstDate = app.datasources.Preps.query.parameters.FirstDate;
  // app.datasources.Preps.query.parameters.EndDate = app.datasources.Preps.query.parameters.EndDate;
  
    app.datasources.Preps.query.parameters.Kpi = app.pages.ManagersPage.descendants.DropdownKpi.value;
    
    if (app.pages.ManagersPage.descendants.DropdownAgent.value !== null){
    app.datasources.Preps.query.parameters.Agent = app.pages.ManagersPage.descendants.DropdownAgent.value.Name;

  }
    
    
  // app.datasources.Preps.query.parameters.Kpi = app.pages.ManagersPage.descendants.DropdownKpi.value;
    
  }
  
  else{
  
    app.datasources.Preps.query.parameters.Kpi = null;
  
  }
  
  
}

function assignMyPrepsKpiParam (){

    if(app.pages.MyPreps.descendants.DropdownKpi.value !== null){
     
      app.datasources.Preps.query.parameters.Kpi = app.pages.MyPreps.descendants.DropdownKpi.value;
    
      if (app.pages.MyPreps.descendants.DropdownAgent.value !== null){
        app.datasources.Preps.query.parameters.Agent = app.pages.MyPreps.descendants.DropdownAgent.value.Name;

      }
    }
  
    else{
  
      app.datasources.Preps.query.parameters.Kpi = null;
  
    }
}

function mirrorParams(){

  var endDate = prepsParam.EndDate;
  var firstDate = prepsParam.FirstDate;
  var isBqPerf = prepsParam.IsBqPerf;
  var Kpi = prepsParam.Kpi;
  
  if(app.pages.ManagersPage.descendants.DropdownAgent.value !== null){
  
    var agent = app.pages.ManagersPage.descendants.DropdownAgent.value.Name;  
    app.datasources.PrepsByDate.query.parameters.AgentName = agent;
    console.log(agent);
    
  }
      
  app.datasources.PrepsByDate.query.parameters.EndDate = endDate;
  app.datasources.PrepsByDate.query.parameters.FirstDate = firstDate;
  app.datasources.PrepsByDate.query.parameters.IsBqPerf = isBqPerf;
  app.datasources.PrepsByDate.query.parameters.Kpi = Kpi;

}

// Mirror parameters to work for the "MyPreps" page.

function mirrorParams2(){

  var endDate = prepsParam.EndDate;
  var firstDate = prepsParam.FirstDate;
  var isBqPerf = prepsParam.IsBqPerf;
  var Kpi = prepsParam.Kpi;
  
  if(app.pages.MyPreps.descendants.DropdownAgent.value !== null){
  
    var agent = app.pages.MyPreps.descendants.DropdownAgent.value.Name;  
    app.datasources.PrepsByDate.query.parameters.AgentName = agent;
    console.log(agent);
    
    
    // Assigns supervisor parameter
    
    var sup = app.datasources.MeDatasource.item.Name;
    prepsParam.Supervisor = sup;
    console.log(sup);
    
  }
      
  app.datasources.PrepsByDate.query.parameters.EndDate = endDate;
  app.datasources.PrepsByDate.query.parameters.FirstDate = firstDate;
  app.datasources.PrepsByDate.query.parameters.IsBqPerf = isBqPerf;
  app.datasources.PrepsByDate.query.parameters.Kpi = Kpi;

}

function resetParams(){

  prepsParam.AgentName = null;
  prepsParam.IsBqPerf = null;
  prepsParam.IsBySup = null;
  prepsParam.Kpi = null;
  prepsParam.ManagerSupervisor = null;
  prepsParam.Supervisor = null;

}

/*

props = app.pages.MainPage.properties;

function isWithinDateRange(){
  var firstDate = app.pages.MainPage.properties.FirstDate;
  var endDate = app.pages.MainPage.properties.EndDate;
  var myDate = app.pages.MainPage.descendants.DateBoxToMatch.value;
  
  if (myDate > firstDate && myDate < endDate){
    props.TrueOrFalse = true;
  }
  else {
  props.TrueOrFalse = false;
  }
  
}



var results = [];
var query = app.models.Preps.datasources.Preps.query.filters.KPI._equals = 'DSAT';





function assignPrepsParam(){

props = app.pages.MainPage.properties;

app.datasources.PrepsByDate.query.parameters.FirstDate = props.FirstDate;
app.datasources.PrepsByDate.query.parameters.EndDate = props.EndDate;
}

assignPrepsParam();


*/

// -------------------------------------------

  /*
  
  if (app.pages.MyPreps.descendants.DropdownKpi.value !== null){
  
      app.datasources.Preps.query.parameters.Kpi = app.pages.MyPreps.descendants.DropdownKpi.value;
    
    if(app.pages.MyPreps.descendants.DropdownAgent.value !== null){
    
      app.datasources.Preps.query.parameters.Agent = app.pages.MyPreps.descendants.DropdownAgent.value.Name;      
      
    }
    
  }
  
  else{
  
    app.datasources.Preps.query.parameters.Kpi = null;
  
  }
  
  */

//-------------------------------------------------

/* Before changes

function assignPrepsByKpiParams(){
  
  if(app.pages.MainPage.descendants.DropdownAgent.value !== null){
  app.datasources.PrepsByKpi.query.parameters.FirstDate = app.datasources.Preps.query.parameters.FirstDate;
  app.datasources.PrepsByKpi.query.parameters.EndDate = app.datasources.Preps.query.parameters.EndDate;
  app.datasources.PrepsByKpi.query.parameters.Kpi = app.pages.MainPage.descendants.DropdownKpi.value;
  app.datasources.PrepsByKpi.query.parameters.Agent = app.pages.MainPage.descendants.DropdownAgent.value.Name;
  }
}

*/ 

