
var i = 0;
var images = [];
var time = 1500;



images[0] = 'images/fuego1.jpg';
images[1] = 'images/fuego2.jpg';
images[2] = 'images/fuego3.jpg';


function changeImg() {
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
