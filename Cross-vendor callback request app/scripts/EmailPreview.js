function emailHTML(){
  
    var caseLink = app.pages.MainPage.children.Container.children.Panel7.children.caseLink.value;
    var currentOwner = app.pages.MainPage.children.Container.children.Panel7.children.currentOwner.value;
    var Pod = app.pages.MainPage.children.Container.children.Panel7.children.Pod.value;
    var caseLanguage = app.pages.MainPage.children.Container.children.Panel7.children.caseLanguage.value;
    var customerName = app.pages.MainPage.children.Container.children.Panel7.children.customerName.value;
    var phoneNumber = app.pages.MainPage.children.Container.children.Panel7.children.phoneNumber.value;
    var dateTime = app.pages.MainPage.children.Container.children.Panel7.children.dateTime.value;
    var linkToEmail = app.pages.MainPage.children.Container.children.Panel7.children.linkToEmail.value;
    var Reason = app.pages.MainPage.children.Container.children.Panel7.children.Reason.value;
    var nextSteps = app.pages.MainPage.children.Container.children.Panel7.children.nextSteps.value;
    var detailedComment = app.pages.MainPage.children.Container.children.Panel7.children.detailedComment.value;
  
  return '<p>Hello '+ caseLink +'</p>';
  
}