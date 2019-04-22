var backupPageProps = app.pages.BackupStuff.properties;



function dumpCSSText(element){
  var s = '';
  var o =  getComputedStyle(element);
  for(var i = 0; i < o.length; i++){
    s+=o[i] + ':' + o.getPropertyValue(o[i])+';';
  }
  backupPageProps.Css = s;
  return s;
  
}