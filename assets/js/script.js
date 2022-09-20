// number counter function
var countNum = document.querySelector('.counter');
var loadingNum = document.querySelector('.loading-num');
counter = 0;

var counting = setInterval(runCounter, 17);
function runCounter() {
  if (counter !== 100) {
    loadingNum.innerHTML = counter++;
  } else {
    countNum.classList.add('fade-out-active');
    clearInterval(counting);
  }
}























