
function getRandomIntFromRange(min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);

  if (min<0) {
    console.log('Поменяйте первый параметр');
  }

  if (max<0) {
    console.log('Поменяйте второй параметр');
  }

  if (max<min) {
    console.log('Так как max должно быть больше min, поменяйте их местами');
  }

  return Math.floor(Math.random() * (max - min)) + min;

}


console.log(getRandomIntFromRange(5, 10));




function getRandomFloat(min, max, n) {
  return (Math.random() * (max - min) + min).toFixed(n);
}

console.log(getRandomFloat(11, 101, 3));
