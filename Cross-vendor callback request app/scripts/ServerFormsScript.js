

/* Form Items IDs: 

TEXT:       
0- 920938051
1- 1961768037,
2- 768296091,
3- 109212732,
4- 1951448283,
5- 593241163,
6- 979994102,
7- 921145916,
8- 1792750407

PARAGRAPH:  
9- 135395143,
10- 634132939

*/


var form = FormApp.openById('19f1s0jwETA86asdTWB477dUjVtZD1dsM7kVIvFu-AhI');
var formItems = form.getItems(FormApp.ItemType.TEXT);
var strFormItems = new Array(11);
var formItemsBlock = form.getItems(FormApp.ItemType.PARAGRAPH_TEXT);

function getFormTitle(){
  return form.getTitle();
}

function getOneItem(){
  
   var formItem1 = formItems[1].getId();
  Logger.log(formItem1);
  return formItem1;
   
  
}

var formItem0 = formItems[0].getId();
var formItem1 = formItems[1].getId();
var formItem2 = formItems[2].getId();
var formItem3 = formItems[3].getId();
var formItem4 = formItems[4].getId();
var formItem5 = formItems[5].getId();
var formItem6 = formItems[6].getId();
var formItem7 = formItems[7].getId();
var formItem8 = formItems[8].getId();
var formItem9 = formItemsBlock[0].getId();
var formItem10 = formItemsBlock[1].getId();

function itemsIds(){

  var idArray = [formItem0.toString(), formItem1.toString(), formItem2.toString(), formItem3.toString(), formItem4.toString(), formItem5.toString(), formItem6.toString(), formItem7.toString(),
                 formItem8.toString(),formItem9.toString(),formItem10.toString()];
  return idArray;

}

function lastId(){
  
  return formItemsBlock[1].getTitle();

}

var myItem = form.getItemById(1961768037);
var textItem1 = myItem.asTextItem();


function submitAnswer(){
  
 var strResponse = textItem1.createResponse("My Response");
 form.createResponse().withItemResponse(strResponse).submit();
  
  
}


// , response3, response4, response5, response6, response7, response8, response9, response10){

function submitForm(response0, response1, response2, response3, response4, response5, response6, response7, response8, response9, response10){
    
  var itemResponse0 = form.getItemById(920938051).asTextItem().createResponse(response0);
  var itemResponse1 = form.getItemById(1961768037).asTextItem().createResponse(response1);
  var itemResponse2 = form.getItemById(768296091).asTextItem().createResponse(response2);
  var itemResponse3 = form.getItemById(109212732).asTextItem().createResponse(response3);
  var itemResponse4 = form.getItemById(1951448283).asTextItem().createResponse(response4);
  var itemResponse5 = form.getItemById(593241163).asTextItem().createResponse(response5);
  var itemResponse6 = form.getItemById(979994102).asTextItem().createResponse(response6);
  var itemResponse7 = form.getItemById(921145916).asTextItem().createResponse(response7);
  var itemResponse8 = form.getItemById(1792750407).asTextItem().createResponse(response8);
  var itemResponse9 = form.getItemById(135395143).asParagraphTextItem().createResponse(response9);
  var itemResponse10 = form.getItemById(634132939).asParagraphTextItem().createResponse(response10);
    
  form.createResponse().withItemResponse(itemResponse0).withItemResponse(itemResponse1).withItemResponse(itemResponse2)
    .withItemResponse(itemResponse3).withItemResponse(itemResponse4).withItemResponse(itemResponse5)
    .withItemResponse(itemResponse6).withItemResponse(itemResponse7).withItemResponse(itemResponse8)
    .withItemResponse(itemResponse9).withItemResponse(itemResponse10).submit();
}