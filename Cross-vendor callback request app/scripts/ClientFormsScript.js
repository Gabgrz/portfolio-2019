// var formPageProps = app.pages.Forms.properties;

var myResponse = 'MY RESPONSEEE';

var text2 = 'text';
var text3 = 'ha';

var myCase = app.pages.MainPage.children.Container.children.PanelCallCaseContainer.children.PanelCaseInfo.children.caseLink.value;


// Gets form title

/* function getFormTitle(){
    
  google.script.run.withSuccessHandler(function(formTitle){formPageProps.FormTitle = formTitle;}).getFormTitle();
  
}

getFormTitle();



function getOneItem(){
  google.script.run.withSuccessHandler(function(oneItem){formPageProps.OneItem = oneItem;}).getOneItem();
}

getOneItem();

// Submitting Response

*/

function submitAnswer(){
  google.script.run.withSuccessHandler(function(){}).submitAnswer(myResponse);
                                                          
                                                        
}


// submitAnswer();

/*

function showFormIds(){
  
  google.script.run.withSuccessHandler(function(idArray){formPageProps.arrayIDs = idArray;}).itemsIds();
}


showFormIds();



function getLastId(){
  
  google.script.run.withSuccessHandler(function(lastId){formPageProps.LastID = lastId;}).lastId();
}



getLastId();

*/

/*
        caseLink: app.pages.MainPage.descendants.caseLink.value;
        currentOwner: app.pages.MainPage.descendants.currentOwner.value;
        Pod: app.pages.MainPage.descendants.Pod.value;
        caseLanguage: app.pages.MainPage.descendants.caseLanguage.value;
        customerName: app.pages.MainPage.descendants.customerName.value;
        phoneNumber: app.pages.MainPage.descendants.phoneNumber.value;
        linkToEmail: app.pages.MainPage.descendants.linkToEmail.value;
        Reason: app.pages.MainPage.descendants.Reason.value;
        nextSteps: app.pages.MainPage.descendants.nextSteps.value;
        detailedComment: app.pages.MainPage.descendants.detailedComment.value;
        dateTime: app.pages.MainPage.descendants.dateTime.value;
      }


*/


function submitForm(){
  
    var caseLink = app.pages.MainPage.descendants.caseLink.value;
    var currentOwner = app.pages.MainPage.descendants.currentOwner.value;
    var Pod = app.pages.MainPage.descendants.Pod.value;
    var caseLanguage = app.pages.MainPage.descendants.caseLanguage.value;
    var customerName = app.pages.MainPage.descendants.customerName.value;
    var phoneNumber = app.pages.MainPage.descendants.phoneNumber.value;
    var dateTime = app.pages.MainPage.descendants.dateTime.value;
    var linkToEmail = app.pages.MainPage.descendants.linkToEmail.value;
    var Reason = app.pages.MainPage.descendants.Reason.value;
    var nextSteps = app.pages.MainPage.descendants.nextSteps.value;
    var detailedComment = app.pages.MainPage.descendants.detailedComment.value;
      
    
  google.script.run.submitForm(currentOwner,caseLink,Pod,caseLanguage,customerName,phoneNumber,dateTime,linkToEmail,Reason,nextSteps,detailedComment);
  
}

