var number1 = Math.floor(Math.random()*6) + 1;
var number2 = Math.floor(Math.random()*6) + 1;

var image1 = 'images/dice' + number1 + '.png'
var image2 = 'images/dice' + number2 + '.png'

document.querySelector('.img1').setAttribute('src', image1)
document.querySelector('.img2').setAttribute('src', image2)

if (number1 > number2) {
  document.querySelector('h1').innerHTML = '🚩 Player 1 Wins!'
}
else if (number2 > number1) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins! 🚩'
}
else {
  document.querySelector('h1').innerHTML = 'Draw!'
}
