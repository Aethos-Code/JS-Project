
var i = 0;


const images = ['fuego1.jpg', 'fuego2.jpg', 'fuego3.jpg']


const caro = document.getElementById('carousel');

const img = document.createElement('img');

img.src = images[i];
img.width = 500;
caro.appendChild(img);





const leftBtn = document.getElementById('btnL');
const rightBtn = document.getElementById('btnR');


leftBtn.addEventListener('click', () => {
  if (i == 0) {
    i = 2
    img.src = images[i];
    caro.appendChild(img);
    console.log(i)
  } else {
    i--;
    img.src = images[i];
    caro.appendChild(img);
    console.log(i)
  }
});


rightBtn.addEventListener('click', () => {
  if (i == 2) {
    i = 0
    img.src = images[i];
    caro.appendChild(img);
    console.log(i)
  } else {
    i++;
    img.src = images[i];
    caro.appendChild(img);
    console.log(i)
  }
});





