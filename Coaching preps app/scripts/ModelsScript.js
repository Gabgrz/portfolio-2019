/*function getModelLength(){
  var results = [];
  var myQuery = app.models.Preps.newQuery();
  myQuery.filters.relAgents.Name._equals = 'Roberto Tavico';
  results = myQuery.run();
  var gModelLength = results.length;
  console.log(gModelLength);
  return gModelLength;
}
*/

function lastModelItem(agent){

  var results2 = [];
  var myQuery = app.models.Preps.newQuery();
  myQuery.filters.relAgents.Name._equals = agent;
  results2 = myQuery.run();
  var itemStr = results2[results2.length-1]._key;
  console.log("Key is "+itemStr);
  return itemStr;
  
}

function getLowest(){

  var results = [];
  var lowest;
  var query = app.models.Preps.newQuery();
  
  query.sorting.Score._ascending();
  results = query.run();
  results.
  
  lowest = results[5].Score;
  return lowest;

}



function getBottomQValue(){

  var results = [];
  var div = 0;
  
  var query = app.models.PPHPrep.newQuery();
  results = query.run();
  div = parseInt(results.length / 4);
  return results[div].Score;

}

function getOneMonth(){
   
  
}












