// Var declaration


  


/**
 * Clears email form widgets after sending an email.
 * @param {Object} formWidgets - widgets of form.
 */

/*
function cleanEmailForm(pageWidgets) {
  pageWidgets.ToTextBox.value = null;
  pageWidgets.CcTextBox.value = null;
  pageWidgets.SubjectTextBox.value = null;
  pageWidgets.BodyTextEditor.value = null;
  }
  
*/


/**
 * Clears email template form widgets after sending an email with template.
 * @param {Object} formWidgets - widgets of form.
 */
function cleanTemplateForm(pageWidgets) {
  pageWidgets.TemplateToTextBox.value = null;
  pageWidgets.TemplateCcTextBox.value = null;
  pageWidgets.TemplateSubjectTextBox.value = null;
  
}


/**
 * Calls a server method to send an email.
 * @param {Widget} sendButton - widget that triggered the action.
 */

/*
function sendEmailMessage(sendButton) {
  if (!sendButton.root.descendants.SendEmailFormPanel.validate()) {
    return;
  }

  var pageWidgets = sendButton.root.descendants;
  var props = sendButton.root.properties;

  
  google.script.run
    .withSuccessHandler(function() {
      cleanEmailForm(pageWidgets);
      app.datasources.RemainingDailyQuota.load();
      
    })
    .withFailureHandler(function(err) {
      console.error(JSON.stringify(err));
      
    })
    .sendEmail(
      pageWidgets.ToTextBox.value,
      pageWidgets.CcTextBox.value,
      pageWidgets.SubjectTextBox.value,
      pageWidgets.BodyTextEditor.value);
}

*/


/**
 * Calls a server method to send an email with template.
 * @param {Widget} sendButton - widget that triggered the action.
 */


//  && PodV !== null && caseLanguageV !== null && customerNameV !== null && phoneNumberV !== null && linkToEmailV !== null && ReasonV !== null && nextStepsV !== null && detailedCommentV !== null && dateTimeV !== null

function sendTemplateEmailMessage(sendButton) {
  
  var caseLinkV = app.pages.MainPage.descendants.caseLink.value;
  var PodV = app.pages.MainPage.descendants.Pod.value;
  var caseLanguageV = app.pages.MainPage.descendants.caseLanguage.value;
  var customerNameV = app.pages.MainPage.descendants.customerName.value;
  var phoneNumberV = app.pages.MainPage.descendants.phoneNumber.value;
  var linkToEmailV = app.pages.MainPage.descendants.linkToEmail.value;
  var ReasonV = app.pages.MainPage.descendants.Reason.value;
  var nextStepsV = app.pages.MainPage.descendants.nextSteps.value;
  var detailedCommentV = app.pages.MainPage.descendants.detailedComment.value;
  var dateTimeV = app.pages.MainPage.descendants.dateTime.value;
  
  if (caseLinkV !== null && PodV !== null && caseLanguageV !== null && customerNameV !== null && phoneNumberV !== null && linkToEmailV !== null && ReasonV !== null && nextStepsV !== null && detailedCommentV !== null && dateTimeV !== null)
  {

  if (!sendButton.root.descendants.TemplateEmailFormPanel.validate()) {
    return;
  }

  var pageWidgets = sendButton.root.descendants;
  var props = sendButton.root.properties;

  props.SendingTemplateEmail = true;
  google.script.run
    .withSuccessHandler(function() {
      cleanTemplateForm(pageWidgets);
      props.SendingTemplateEmail = false;
    })
    .withFailureHandler(function(err) {
      console.error(JSON.stringify(err));
      props.SendingTemplateEmail = false;
    })
    .sendTemplateEmail(
      pageWidgets.TemplateToTextBox.value,
      pageWidgets.TemplateCcTextBox.value,
      pageWidgets.TemplateSubjectTextBox.value,
      pageWidgets.TemplateTextArea.value,
      {
        caseLink: app.pages.MainPage.descendants.caseLink.value,
        currentOwner: app.pages.MainPage.descendants.currentOwner.value,
        Pod: app.pages.MainPage.descendants.Pod.value,
        caseLanguage: app.pages.MainPage.descendants.caseLanguage.value,
        customerName: app.pages.MainPage.descendants.customerName.value,
        phoneNumber: app.pages.MainPage.descendants.phoneNumber.value,
        linkToEmail: app.pages.MainPage.descendants.linkToEmail.value,
        Reason: app.pages.MainPage.descendants.Reason.value,
        nextSteps: app.pages.MainPage.descendants.nextSteps.value,
        detailedComment: app.pages.MainPage.descendants.detailedComment.value,
        dateTime: app.pages.MainPage.descendants.dateTime.value
      }   
    
  );
    
  }
  else
  {
    window.alert('Please fill out all form fields');
    
  }
  
}

function clearAllFields(){

  app.pages.MainPage.descendants.DropdownLanguage.value = null;
  app.pages.MainPage.descendants.DropdownComp.value = null;
  app.pages.MainPage.descendants.DropdownSupervisor.value = null;
  app.pages.MainPage.descendants.DropdownDate.value = null;
  app.pages.MainPage.descendants.DropdownTime.value = null;
  app.pages.MainPage.descendants.DropdownCase.value = null;
  
  app.pages.MainPage.descendants.caseLink.value = null;
  app.pages.MainPage.descendants.Pod.value = null;
  app.pages.MainPage.descendants.caseLanguage.value = null;
  app.pages.MainPage.descendants.customerName.value = null;
  app.pages.MainPage.descendants.phoneNumber.value = null;
  app.pages.MainPage.descendants.linkToEmail.value = null;
  app.pages.MainPage.descendants.Reason.value = null;
  app.pages.MainPage.descendants.nextSteps.value = null;
  app.pages.MainPage.descendants.detailedComment.value = null;
  app.pages.MainPage.descendants.dateTime.value = null;
}

/*

function formValidation(){

  if (caseLinkV === null && PodV === null && caseLanguageV === null && customerNameV === null && phoneNumberV === null && linkToEmailV === null && ReasonV === null && nextStepsV === null && detailedCommentV === null && dateTimeV === null){
    
    
  }
}

*/

function transformDate(){

  var jan = 'Jan';
  var feb = 'Feb';
  var mar = 'March';
  var apr = 'April';
  var may = 'May';
  var jun = 'June';
  var jul = 'July';
  var aug = 'Aug';
  var sep = 'Sept';
  var oct = 'Oct';
  var nov = 'Nov';
  var dec = 'Dec';
  
  var Months = [jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec];
  
  var props = app.pages.MainPage.properties;
  var date = app.pages.MainPage.descendants.DropdownDate.value;
  var dateNum = date.getMonth();
  var day = date.toString().substring(0,10);
  var myDate;
  
  myDate = Months[dateNum];
    
  
  props.DateString = day;
  
}