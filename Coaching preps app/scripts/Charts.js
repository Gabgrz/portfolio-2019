
app.datasources.Supervisors.relations.relAgents.load();

function thisLen(){

  
  
    
  var len = app.datasources.Supervisors.items.length;
  console.log('Sup items length is :'+len);
  console.log(app.datasources.Supervisors.item.Name);
 // var lenSupAgent = app.datasources.Supervisors.item.relAgents.length;
  //console.log('Sup has '+lenSupAgent+' agents');
  // var results = [];
  
  var lenArr = [];

  for(var x = 0; x < len; x++){
      console.log('x is '+x);
      console.log('len is '+len);
      lenArr[x] = app.datasources.Supervisors.items[x].relAgents.length;
      console.log(app.datasources.Supervisors.items[x].Name);
  }
  
  for(var i = 0; i < len; i++){
    app.pages.Analytics.properties.LengthList[i] = lenArr[i];
  }
}

function winlen(){

  

}