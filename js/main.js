function getRandomIntFromRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

  if (min<0) {
    console.log('Поменяйте первый параметр');
  }
  if (max<0) {
    console.log('Поменяйте второй параметр');
  }
  if (max<min) {
    console.log('Поменяйте параметры, чтобы max был больше min');
  }


console.log(getRandomIntFromRange(5, 10));


function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
getRandomFloat(11, 101)
