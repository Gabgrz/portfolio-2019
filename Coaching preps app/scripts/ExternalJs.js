/*

var props = app.pages.JsLibrary.properties;

function showChart(widget){
    google.charts.load('current', {'packages':['timeline']});
    function drawChart() {
       var container = widget.getElement();
       var chart = new google.visualization.Timeline(container);
       var dataTable = new google.visualization.DataTable();
       dataTable.addColumn({ type: 'string', id: 'President' });
       dataTable.addColumn({ type: 'date', id: 'Start' });
       dataTable.addColumn({ type: 'date', id: 'End' });
       dataTable.addRows([
          [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
          [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
          [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]]);
      chart.draw(dataTable);
    }
    google.charts.setOnLoadCallback(drawChart);
}

function getMyElement(){
  
  var myElement = app.pages.JsLibrary.descendants.Html2.getElement().toLocaleString();
  props.HtmlElement2 = myElement;
  
}

  
function canvasChart(widget){
  

  var container = widget.getElement();
  var chart = new CanvasJS.Chart(container, {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Simple Line Chart"
	},
	axisY:{
		includeZero: false
	},
	data: [{        
		type: "line",       
		dataPoints: [
			{ y: 450 },
			{ y: 414},
			{ y: 520, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
			{ y: 460 },
			{ y: 450 },
			{ y: 500 },
			{ y: 480 },
			{ y: 480 },
			{ y: 410 , indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
			{ y: 500 },
			{ y: 480 },
			{ y: 510 }
		]
	}]
});
chart.render();

}

*/