function getRandomIntFromRange(min, max) {

  if (min<0) {
    console.log('Поменяйте первый параметр');
    return -1;
  }

  if (max<0) {
    console.log('Поменяйте второй параметр');
    return -1;
  }

  if (max<min) {
    console.log('Так как max должно быть больше min, поменяйте их местами');
    return -1;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomIntFromRange(5, 10));


function getRandomFloat(min, max, n) {
  if (min<0) {
    console.log('Поменяйте первый параметр');
    return -1;
  }

  if (max<0) {
    console.log('Поменяйте второй параметр');
    return -1;
  }

  if (max<min) {
    console.log('Так как max должно быть больше min, поменяйте их местами');
    return -1;
  }

  if (n<0) {
    console.log('Поменяйте третий параметр');
    return -1;
  }

  return (Math.random() * (max - min) + min).toFixed(n);
}

console.log(getRandomFloat(11, 101, 3));
