var grayImage = null;
var originalImage = null;
var redImage = null;
var myMirrorImage = null;
var can = document.getElementById("myCanvas");

function upload(){
  
  var file = document.getElementById("myImage");
  originalImage = new SimpleImage(file);
  grayImage = new SimpleImage(file);
  redImage = new SimpleImage(file);
  myMirrorImage = new SimpleImage(file);
  
 
  
  originalImage.drawTo(can);
  
}

function filterGray(){
    
  for (var pixel of grayImage.values()){

    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);

  }
}

function imageIsLoaded(img) {
  if (img == null || !img.complete()) {
    alert("Image not loaded");
    return false;
  } else {
    return true;
  }
}

function doGray() {
  
    if(imageIsLoaded(grayImage)){
    filterGray();	                      // function performs the grayscale work
    grayImage.drawTo(can);              // display image
  }
}

function doRed() {
  if (imageIsLoaded(redImage)) {
    filterRed();
    redImage.drawTo(can);
  }
}

function filterRed() {
  for (var pixel of redImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
}

function reset(){
  
  originalImage.drawTo(can);
  grayImage = new SimpleImage(originalImage);
  redImage = new SimpleImage(originalImage);
  
}

function mirrorImage(){
  
    var imageWidth = originalImage.getWidth()-1;

    for (var pixel of originalImage.values()){
      
      var x = pixel.getX();
      var y = pixel.getY();

      myMirrorImage.setPixel(imageWidth-x,y,pixel);
      
    }
  
  myMirrorImage.drawTo(can);
  
}