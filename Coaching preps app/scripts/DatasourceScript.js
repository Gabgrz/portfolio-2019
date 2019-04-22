var myPrepsDesc = app.pages.MyPreps.descendants;

var mainPage = app.pages.MainPage;
var propsMainPage = ManagersPage.properties;
var mainPageDesc = ManagersPage.descendants;

var sourcePage = app.pages.DatasourceTests;
var sourceProps = app.pages.DatasourceTests.properties;

var prepFormDesc = app.pages.PrepForm.descendants;


function dataSrcLength() {
  var length = app.datasources.PrepsByKpi.items.length;
  propsMainPage.DatasourceLength = length;
}

function defaultSup(){

   myPrepsDesc.DropdownSupervisor.value = app.user;
  
}


function getMyAgents(){
  
  app.datasources.AgentsBySups.load();
  myPrepsDesc.DropdownSupervisor.value = app.models.Agents.datasources.AgentsBySups.relations.relSupervisors.item.Name;
}

function dateToUTCString(){
  
  app.datasources.PrepsBySup.item.Date.toUTCString();
  
}

function heldPrepItem(){

  var myItem = app.datasources.PrepsBySup.item;
  

}

function getHeldPrepItem(){

  var thisItem = helpPrepItem();
  var myKPI = thisItem.KPI;
  return myKPI;

}

function showItems(){

  var strItems = app.models.Preps.datasources.PrepsBySup.items.toString();
  app.pages.DatasourceTests.properties.ItemsStr = strItems;
  
/* 

  var strItems = app.models.Preps.datasources.PrepsBySup.items.toString();
  app.pages.DatasourceTests.properties.ItemsStr = strItems;
  
  */
  
  
  }


function showItemByKey(){

  var dataSrscLength = app.models.Preps.datasources.PrepsBySup.items.length;
  sourceProps.DataSrscLength = dataSrscLength;
  var lastItem = app.models.Preps.datasources.PrepsBySup.items[dataSrscLength-1].EvenBetter;
  sourceProps.OneItem = lastItem;
  
}

// Pseudo Codigo

/*

- A Prep is saved.
- That Prep is assigned as the related prep to the KPI Prep.
- The KPI Prep is saved.

Everything gets executed in a single action.


*/

function getTimestamp3(){
  var myDate = new Date();
  var timestamp = myDate.toLocaleString();
  return timestamp;
}

function getThisValue(){

  var returnedKpi = showWidgetSwitch();
  app.pages.ConditionalCSS.properties.MyValue = returnedKpi;

}


function createPphPrep(){
  
  var myTimeStamp = getTimestamp3();

  var myDatasource = app.datasources.PrepsBySup;
  var myCreateDatasource = myDatasource.modes.create;
  var newItem = myCreateDatasource.item;
  newItem.Date = prepFormDesc.FieldDate.value;
  newItem.relAgents = prepFormDesc.FieldAgent.value;
  newItem.KPI = prepFormDesc.FieldKpi.value;
  
  var returnedKpi = prepFormDesc.FieldKpi.value;
  
  newItem.Score = parseFloat(prepFormDesc.FieldScore.value);
  
  newItem.Wins = prepFormDesc.FieldWins.value;
  newItem.EvenBetter = prepFormDesc.FieldEvenBetter.value;
  newItem.ActionPlan = prepFormDesc.FieldActionPlan.value;
  newItem.SubmittedBy = app.user.username;
  
  newItem.Timestamp = myTimeStamp;
  
  myCreateDatasource.createItem(function (record){
    
    var myDatasource2;
    var myCreateDatasource2;
    var myNewItem2;
    
    switch(returnedKpi){
        
        case 'CCA Reviewers':
        
        myDatasource2 = app.datasources.CcaReviewersPrep;
        myCreateDatasource2 = myDatasource2.modes.create;
        myNewItem2 = myCreateDatasource2.item;

        myNewItem2.Score = newItem.Score;
        
        myNewItem2.CrossMatch = parseFloat(prepFormDesc.FieldCrossMatch.value);
        myNewItem2.DisputeAccuracy = parseFloat(prepFormDesc.FieldDisputeAccuracy.value);
        myNewItem2.DisputeRate = parseFloat(prepFormDesc.FieldDisputeRate.value);
        myNewItem2.Comment = prepFormDesc.TextAreaCcaReviewersComm.value;
        
        myNewItem2.relPreps = record;
        myCreateDatasource2.createItem();
        break;
        
        case 'Scrubbings completion':
        
        myDatasource2 = app.datasources.ScrubbingsCompletionPrep;
        myCreateDatasource2 = myDatasource2.modes.create;
        myNewItem2 = myCreateDatasource2.item;

        myNewItem2.Score = newItem.Score;
        
        myNewItem2.Dorys = parseInt(prepFormDesc.FieldDorys.value);
        myNewItem2.Scrubbings = parseInt(prepFormDesc.FieldScrubbings.value);
        myNewItem2.RCAs = parseInt(prepFormDesc.FieldRcas.value);
        myNewItem2.InternalDisputes = parseInt(prepFormDesc.FieldInternalDisputes.value);
        myNewItem2.ExternalDisputes = parseInt(prepFormDesc.FieldExternalDisputes.value);
        myNewItem2.Comment = prepFormDesc.TextAreaScrubbingComm.value;
        
        myNewItem2.relPreps = record;
        myCreateDatasource2.createItem();
        break;
        
        case 'Dashboard completion':
        
        myDatasource2 = app.datasources.DashboardCompletionPrep;
        myCreateDatasource2 = myDatasource2.modes.create;
        myNewItem2 = myCreateDatasource2.item;

        myNewItem2.Score = newItem.Score;
        
        myNewItem2.PendingReviews = parseInt(prepFormDesc.FieldPendingReviews.value);
        myNewItem2.Exceptions = parseInt(prepFormDesc.FieldExceptions.value);
        myNewItem2.Comment = prepFormDesc.TextAreaDashboardComm.value;
        
        myNewItem2.relPreps = record;
        myCreateDatasource2.createItem();
        break;

        case 'PPH':
        
        myDatasource2 = app.datasources.PPHPrep;
        myCreateDatasource2 = myDatasource2.modes.create;
        myNewItem2 = myCreateDatasource2.item;

        myNewItem2.Score = newItem.Score;
        
        myNewItem2.ACW = prepFormDesc.FieldAcw.value;
        myNewItem2.AHT = prepFormDesc.FieldAht.value;
        myNewItem2.PhoneState = parseInt(prepFormDesc.FieldPhoneState.value);
        myNewItem2.ProductiveHours = prepFormDesc.FieldProduH.value;
        myNewItem2.Comment = prepFormDesc.TextAreaComm.value;
        myNewItem2.relPreps = record;
        myCreateDatasource2.createItem();
        break;
        
      case 'QA':
        
        myDatasource2 = app.datasources.QAPrep;
        myCreateDatasource2 = myDatasource2.modes.create;
        myNewItem2 = myCreateDatasource2.item;
        
        myNewItem2.Score = newItem.Score;
        
        myNewItem2.NumCasesReviewed = parseInt(prepFormDesc.FieldQaNumCases.value);
        myNewItem2.CasesReviewed = prepFormDesc.TextAreaCasesReviewed.value;
        myNewItem2.Field2 = parseInt(prepFormDesc.FieldQa2.value);
        myNewItem2.Comment = prepFormDesc.TextAreaQaComm.value;
        myNewItem2.relPreps = record;
        myCreateDatasource2.createItem();
        break;
        
      case 'CCA':
        
        myDatasource2 = app.datasources.CCAPrep;
        myCreateDatasource2 = myDatasource2.modes.create;
        myNewItem2 = myCreateDatasource2.item;
        
        myNewItem2.ScoreExternal = parseInt(prepFormDesc.FieldCcaExternal.value);
        myNewItem2.ScoreInternal = parseInt(prepFormDesc.FieldCcaInternal.value);
        myNewItem2.NumCasesReviewed = parseInt(prepFormDesc.FieldCcaNumCases.value);
        myNewItem2.CasesReviewed = prepFormDesc.TextAreaCcaCasesReviewed.value;
        myNewItem2.Comment = prepFormDesc.TextAreaCcaComm.value;
       
        /* Fields not required
        
        myNewItem2.PendingReviews = parseInt(prepFormDesc.FieldCcaPendingReviews.value);
        myNewItem2.Exceptions = parseInt(prepFormDesc.FieldCcaExceptions.value);
        myNewItem2.Dorys = parseInt(prepFormDesc.FieldCcaDorys.value);
        myNewItem2.Scrubbings = parseInt(prepFormDesc.FieldCcaScrubbings.value);
        myNewItem2.RCAs = parseInt(prepFormDesc.FieldCcaRcas.value);
        myNewItem2.InternalDisputes = parseInt(prepFormDesc.FieldCcaInternalDisputes.value);
        myNewItem2.ExternalDisputesReviews = parseInt(prepFormDesc.FieldCcaExternalDisputes.value);
        myNewItem2.CrossMatch = parseInt(prepFormDesc.FieldCcaCrossMatch.value);
        myNewItem2.DisputeRate = parseInt(prepFormDesc.FieldCcaDisputeRate.value);
        myNewItem2.DisputeAccuracy = parseInt(prepFormDesc.FieldCcaDisputeAccuracy.value);
        myNewItem2.IsInsigth = prepFormDesc.CheckboxInsight.value;
        
        */
        
        myNewItem2.relPreps = record;
        
        myCreateDatasource2.createItem();
        break;
        
      case 'CSAT':
        
        myDatasource2 = app.datasources.CSATPrep;
        myCreateDatasource2 = myDatasource2.modes.create;
        myNewItem2 = myCreateDatasource2.item;
        
        myNewItem2.Score = newItem.Score;
        
        myNewItem2.ResponseRate = parseInt(prepFormDesc.FieldCsatResponseRate.value);
        myNewItem2.CaseAgeAvg = parseInt(prepFormDesc.FieldCsatCaseAgeAvg.value);
        myNewItem2.ResponseSla = prepFormDesc.FieldCsatResponseSla.value;
        myNewItem2.ResolutionSla = prepFormDesc.FieldCsatResolutionSla.value;
        myNewItem2.NumCasesReviewed = parseInt(prepFormDesc.FieldCsatNumCases.value);
        myNewItem2.CasesReviewed = prepFormDesc.TextAreaCsatCasesReviewed.value;
        myNewItem2.Comment = prepFormDesc.TextAreaCsatComm.value;
        myNewItem2.relPreps = record;
        myCreateDatasource2.createItem();
                
    }
  
  });
  
}

function getRecentItem(){

  var thisDatasource = app.datasources.PrepsByTimestamp;
  thisDatasource.load();
  var myItem = thisDatasource.items[0].KPI;
  app.pages.PrepForm.descendants.FieldRelPrep.value = myItem;

}

function saveFullPrep(){

  getRecentItem(createPrepItem());

}

  
  /*
  
  var dataSource2 = app.datasources.PrepsByDate.items;

  dataSource2 = dataSource1;
  
  */
  



/*

function createKpiPrep(){

  var myDatasource = app.datasources.PPHPrep;
  var myCreatedatasource = myDatasource.modes.create;
  var myItem = myCreatedatasource.item;
  myItem.ACW = 12;
  myItem.AHT = 33;
  myItem.PhoneState = 77;
  myItem.ProductiveHours = 101;
  myItem.

}


*/



/*

function increasePageSize() {

  var dataAgents = app.datasources.Agents;
  dataAgents.query.pageSize = 10;
  
  var dataAgentsBySups = app.datasources.AgentsBySups;
  dataAgentsBySups.query.pageSize = 10;
  
}

*/