let count = 10;
var i = 0;
var moveUpPaws = 250;

const pawLeft = document.getElementsByClassName('image-paws-left')[0];
const pawRight = document.getElementsByClassName('image-paws-right')[0];

// console.log(pawRight);


function myLoop(){
  setTimeout(function() {
    i++;
    if(i< 10){
      if( i % 2 === 0) {
        moveUpPaws = moveUpPaws-25;
        // console.log('left', moveUpPaws);
        pawLeft.classList.add('fadePerfect');
        pawRight.classList.remove('fadePerfect');
        pawLeft.style.display = "flex";
        pawRight.style.display = "none";
        
        pawLeft.style.marginTop = moveUpPaws + 'px';
        myLoop();
      } else {
        moveUpPaws = moveUpPaws-25;
        // console.log('right', moveUpPaws);
        pawLeft.classList.remove('fadePerfect');
        pawRight.classList.add('fadePerfect');
        pawLeft.style.display = 'none';
        pawRight.style.display = 'flex';
        pawRight.style.marginTop = moveUpPaws + 'px';
        myLoop();
      }
    }
    if(i === 9){
      pawRight.style.opacity = "1";
      pawRight.style.display = "flex";
      pawRight.classList.add('fadeinEnd');
      moveUpPaws = moveUpPaws-25;
      pawRight.style.marginTop = moveUpPaws + 'px';
    }
    if(i === 10){
      // console.log('done');
      moveUpPaws = moveUpPaws;
      pawLeft.style.marginTop = moveUpPaws + 'px';
      pawLeft.style.display = "flex";
      pawLeft.style.opacity = "1";
      pawLeft.classList.add('fadeinEnd');
      
    }
  }, 500)
}
myLoop();