var prepFormPage = app.pages.PrepForm;
var prepFormDesc = prepFormPage.descendants;
var myPageDesc = app.pages.ConditionalCSS.descendants;
var myTextEle = myPageDesc.CssText;
var myText = myTextEle.text;

var prepPphForm = prepFormDesc.FormPphPrep;
var prepCsatForm = prepFormDesc.FormCsatPrep;
var prepCcaForm = prepFormDesc.FormCcaPrep;
var prepQaForm = prepFormDesc.FormQaPrep;

var checkedBtn = app.pages.PrepForm.descendants.ButtonCheckedAgents;
var checkedBtn2 = app.pages.MyPreps.descendants.ButtonCheckedAgents;

var MngrsPage = app.pages.ManagersPage;
var mngrsDesc = MngrsPage.descendants;

var myPrepsPage = app.pages.MyPreps;
var myPrepsDesc = myPrepsPage.descendants;

var checkedBtnBq = mngrsDesc.ButtonChecked;
var uncheckedBtnBq = mngrsDesc.ButtonUnchecked;

// Managers Page variables

var kpiField = MngrsPage.descendants.DropdownKpi;
var lineChart = MngrsPage.descendants.LineChart1; 
var selectKpiMessage = MngrsPage.descendants.LabelChooseKpi;

var agentField = MngrsPage.descendants.DropdownAgent;

lineChart.styles = ['nonVisible'];

// MyPreps Page variables

var kpiField2 = myPrepsDesc.DropdownKpi;
var lineChart2 = myPrepsDesc.LineChart1; 
var selectKpiMessage2 = myPrepsDesc.LabelChooseKpi;

var agentField2 = myPrepsDesc.DropdownAgent;

lineChart2.styles = ['nonVisible'];

// Managers Page function

function showChart(){
  
  if ((kpiField.value === 'QA' || kpiField.value === 'PPH' || kpiField.value === 'CSAT' || kpiField.value === 'CCA') && agentField.value !== null){

    lineChart.styles = ['visible'];
    selectKpiMessage.styles = ['nonVisible'];

  }
  
  else{
  
    lineChart.styles = ['nonVisible'];
    selectKpiMessage.styles = ['visible'];
    
  }
  
}


// MyPreps Page function

function showChart2(){
  
  if ((kpiField2.value === 'QA' || kpiField2.value === 'PPH' || kpiField2.value === 'CSAT' || kpiField2.value === 'CCA') && agentField2.value !== null){

    lineChart2.styles = ['visible'];
    selectKpiMessage2.styles = ['nonVisible'];

  }
  
  else{
  
    lineChart2.styles = ['nonVisible'];
    selectKpiMessage2.styles = ['visible'];
    
  }
  
}

checkedBtnBq.styles = ['nonVisible'];

mngrsDesc.ImageShow.styles = ['nonVisible'];
mngrsDesc.ImageShow2.styles = ['nonVisible'];

myPrepsDesc.ImageShow.styles = ['nonVisible'];
myPrepsDesc.ImageShow1.styles = ['nonVisible'];

prepPphForm.styles = ['nonVisible'];
prepCsatForm.styles = ['nonVisible'];
prepCcaForm.styles = ['nonVisible'];
prepQaForm.styles = ['nonVisible'];

checkedBtn.styles = ['nonVisible'];
checkedBtn2.styles = ['nonVisible'];




function condiCss(){

  var element = myTextEle.styles = ['myCssClass','invisible'];
  
//  app.pages.ConditionalCSS.properties.CssEle = element;
  
}

function showWidgetSwitch(){

  var PrepKpiField = app.pages.PrepForm.descendants.FieldKpi.value;

  switch(PrepKpiField){

    case 'PPH': 
      prepPphForm.styles = ['visible'];
      prepCsatForm.styles = ['nonVisible'];
      prepCcaForm.styles = ['nonVisible'];
      prepQaForm.styles = ['nonVisible'];
      break;
      
    case 'CSAT':
      prepCsatForm.styles = ['visible'];
      prepCcaForm.styles = ['nonVisible'];
      prepQaForm.styles = ['nonVisible'];
      prepPphForm.styles = ['nonVisible'];
      break;
      
    case 'QA': 
      prepQaForm.styles = ['visible'];
      prepCcaForm.styles = ['nonVisible'];
      prepPphForm.styles = ['nonVisible'];
      prepCsatForm.styles = ['nonVisible'];
      break;
      
      
    case 'CCA': 
      prepCcaForm.styles = ['visible'];
      prepPphForm.styles = ['nonVisible'];
      prepCsatForm.styles = ['nonVisible'];
      prepQaForm.styles = ['nonVisible'];
      break;
      
    default: 
      prepPphForm.styles = ['nonVisible'];
      prepCsatForm.styles = ['nonVisible'];
      prepCcaForm.styles = ['nonVisible'];
      prepQaForm.styles = ['nonVisible'];
    }
  
  return PrepKpiField;
  
}


// To be applied on the PrepForm Page

function showMyAgents(){

  var checkedBtn = app.pages.PrepForm.descendants.ButtonCheckedAgents;
  var hiddenBtn = app.pages.PrepForm.descendants.ButtonHiddenAgents;
  
  hiddenBtn.styles = ['nonVisible'];
  checkedBtn.styles = ['visible'];
  
  app.datasources.Preps.query.parameters.IsBySup = true;
  app.datasources.AgentsBySups.query.parameters.IsAgentsBySup = true;
  // app.pages.PrepForm.descendants.TextBoxBoolean.value = true;
  app.datasources.AgentsBySups.query.filters.relSupervisors._equals = getMyself();
  

}

function hideMyAgents(){

  var checkedBtn = app.pages.PrepForm.descendants.ButtonCheckedAgents;
  var hiddenBtn = app.pages.PrepForm.descendants.ButtonHiddenAgents;
  
  checkedBtn.styles = ['nonVisible'];
  hiddenBtn.styles = ['visible'];
  
  app.datasources.Preps.query.parameters.IsBySup = false;
  app.datasources.AgentsBySups.query.parameters.IsAgentsBySup = false;
  
}


// To be applied on the MyPreps page

function assignSup(){

    app.datasources.MeDatasource.load();
    var isLoaded = app.datasources.MeDatasource.loading;
    while (isLoaded === false){
    
      isLoaded = app.datasources.MeDatasource.loading;
    
    }  
  
    // app.datasources.MeDatasource.load();
    var sup = app.datasources.MeDatasource.items[0].Name;
    app.datasources.Preps.query.parameters.Supervisor = sup;
    console.log(sup);
  
}

function showMyAgents2(){
  
  clearDropdown();
  var myPagDesc = app.pages.MyPreps.descendants;
  var checkedBtn = myPagDesc.ButtonCheckedAgents;
  var hiddenBtn = myPagDesc.ButtonHiddenAgents;
  
  hiddenBtn.styles = ['nonVisible'];
  checkedBtn.styles = ['visible'];
  
  app.datasources.Preps.query.parameters.IsBySup = true;
  app.datasources.AgentsBySups.query.parameters.IsAgentsBySup = true;
  
  app.datasources.AgentsBySups.query.filters.relSupervisors._equals = getMyself();
  
  console.log(app.datasources.Preps.query.parameters.IsBySup);
  console.log(getMyself());
  
  if(app.datasources.MeDatasource.item !== null){
    var sup = app.datasources.MeDatasource.items[0].Name;
    app.datasources.Preps.query.parameters.Supervisor = sup;
    console.log(sup);
  }

  
  // myPagDesc.DropdownSupervisor.value = app.datasources.AgentsBySups.relations.relSupervisors.item.Name;
  // app.pages.PrepForm.descendants.TextBoxBoolean.value = true;

}

function hideMyAgents2(){
  
  var myPagDesc = app.pages.MyPreps.descendants;

  var checkedBtn = myPagDesc.ButtonCheckedAgents;
  var hiddenBtn = myPagDesc.ButtonHiddenAgents;
  
  checkedBtn.styles = ['nonVisible'];
  hiddenBtn.styles = ['visible'];
  
  app.datasources.Preps.query.parameters.IsBySup = false;
  app.datasources.AgentsBySups.query.parameters.IsAgentsBySup = false;
  
  app.datasources.AgentsBySups.query.filters.relSupervisors._equals = null;
  
  console.log(app.datasources.Preps.query.parameters.IsBySup);
    
}

function showPreps(){

  mngrsDesc.ContainerAccordion.styles = ['visible'];
  mngrsDesc.ImageShow.styles = ['nonVisible'];
  mngrsDesc.ImageHide.styles = ['visible'];

}

function hidePreps(){
  
  mngrsDesc.ContainerAccordion.styles = ['nonVisible'];
  mngrsDesc.ImageHide.styles = ['nonVisible'];
  mngrsDesc.ImageShow.styles = ['visible'];

}


function showGraph(){

  mngrsDesc.PanelBottom.styles = ['visible'];
  mngrsDesc.ImageShow2.styles = ['nonVisible'];
  mngrsDesc.ImageHide2.styles = ['visible'];

}

function hideGraph(){
  
  mngrsDesc.PanelBottom.styles = ['nonVisible'];
  mngrsDesc.ImageHide2.styles = ['nonVisible'];
  mngrsDesc.ImageShow2.styles = ['visible'];

}


// Hides/Shows MyPreps Page preps and graphs


function showMyPreps(){

  myPrepsDesc.ContainerAccordion.styles = ['visible'];
  myPrepsDesc.ImageShow.styles = ['nonVisible'];
  myPrepsDesc.ImageHide.styles = ['visible'];

}

function hideMyPreps(){
  
  myPrepsDesc.ContainerAccordion.styles = ['nonVisible'];
  myPrepsDesc.ImageHide.styles = ['nonVisible'];
  myPrepsDesc.ImageShow.styles = ['visible'];

}


function showMyGraph(){

  myPrepsDesc.PanelBottom.styles = ['visible'];
  myPrepsDesc.ImageShow1.styles = ['nonVisible'];
  myPrepsDesc.ImageHide1.styles = ['visible'];

}

function hideMyGraph(){
  
  myPrepsDesc.PanelBottom.styles = ['nonVisible'];
  myPrepsDesc.ImageHide1.styles = ['nonVisible'];
  myPrepsDesc.ImageShow1.styles = ['visible'];

}


// Functions to show/hide bottom performers.

function showBqPerf(){

  uncheckedBtnBq.styles = ['nonVisible'];
  checkedBtnBq.styles = ['visible'];
    
  app.datasources.Preps.query.parameters.IsBqPerf = true;
  
}


function hideBqPerf(){

  uncheckedBtnBq.styles = ['visible'];
  checkedBtnBq.styles = ['nonVisible'];
    
  app.datasources.Preps.query.parameters.IsBqPerf = false;
  
}


/*

function showWidgetSwitch(){

  
  var myPanel = app.pages.MyPreps.descendants.Accordion1.children.Accordion1Detail.descendants.PanelPphPrep;
  myPanel.styles = ['nonVisible'];
  
  
}

*/







/*

function showPrepByKpi(){

  
  var PrepKpiField = app.pages.PrepForm.descendants.FieldKpi.value;
  if(PrepKpiField !== 'PPH'){
    PrepKpiForm.styles = ['nonVisible'];
      
  }
    else{
  
      PrepKpiForm.styles = ['visible'];
    
  }
   
}

*/

/*

function getWidgetPos(){

   var myForm = app.pages.PrepForm.descendants.FormPphPrep;
   myForm. 
  
  
}

*/