const getRandomIntFromRange = function(min, max) {
  if (min < 0) {
    alert('Поменяйте первый параметр');
    return -1;
  }

  if (max<0) {
    alert('Поменяйте второй параметр');
    return -1;
  }

  if (max<min) {
    alert('Так как max должно быть больше Min, поменяйте их местами');
    return -1;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getRandomFloat(minf, maxf, n) {
  if (minf<0) {
    alert('Поменяйте первый параметр');
    return -1;
  }

  if (maxf<0) {
    alert('Поменяйте второй параметр');
    return -1;
  }

  if (maxf<minf) {
    alert('Так как Max должно быть больше Min, поменяйте их местами');
    return -1;
  }

  if (n<0) {
    alert('Поменяйте третий параметр');
    return -1;
  }

  return (Math.random() * (maxf - minf) + minf).toFixed(n);
}

/*выбор из массива*/

const getRandomArrayElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
};

/*случайная длина*/

const getRandomLength = function (arr) {
  let lengthArray = Math.floor(Math.random() * arr.length);
  let newArray = [];

  for(let i=0; i<lengthArray; i = i + 1) {
    newArray.push(arr[i]);
  }
  return newArray;
};

export {getRandomIntFromRange, getRandomFloat, getRandomArrayElement, getRandomLength};

