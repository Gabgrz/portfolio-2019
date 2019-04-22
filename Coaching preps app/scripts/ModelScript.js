var prepFormPage2 = app.pages.PrepForm;
var prepFormDesc2 = prepFormPage2.descendants;
var prepFormProps2 = prepFormPage2.properties;

var sProps = app.pages.DatasourceTests.properties;

function getModelLength() {
  
  google.script.run.withSuccessHandler(function getLength(myLength){sProps.ModelLength = myLength;}).getModelLength();
  
}



function getModelItem(){

  var agent = app.pages.PrepForm.descendants.FieldAgent.value.Name;
  
  google.script.run
    .withSuccessHandler(function getItem(item){
  
      prepFormProps2.AgentKey = item;
      app.datasources.LastPrep.query.parameters.PrepKey = item;
      app.datasources.LastPrep.load();
      })
    .lastModelItem(agent);
  
}
