'use strict';

const getRandomIntFromRange = function(min, max) {
  if (min < 0) {
    console.log('Поменяйте первый параметр');
    return -1;
  }

  if (max<0) {
    console.log('Поменяйте второй параметр');
    return -1;
  }

  if (max<min) {
    console.log('Так как max должно быть больше Min, поменяйте их местами');
    return -1;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getRandomFloat(minf, maxf, n) {
  if (minf<0) {
    console.log('Поменяйте первый параметр');
    return -1;
  }

  if (maxf<0) {
    console.log('Поменяйте второй параметр');
    return -1;
  }

  if (maxf<minf) {
    console.log('Так как Max должно быть больше Min, поменяйте их местами');
    return -1;
  }

  if (n<0) {
    console.log('Поменяйте третий параметр');
    return -1;
  }

  return (Math.random() * (maxf - minf) + minf).toFixed(n);
};

const MIN = 1;
const MAX = 1000000;
const MAX_ROOMS = 10;
const MAX_GUESTS = 30;

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow'
];

const CHEKIN = [
  '12:00',
  '13:00',
  '14:00'
];

const CHEKOUT = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const PHOTOS = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

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

const createAds = function (number) {
  let finalAds = [];

  for (let i = 0; i<number; i = i + 1) {
    let locationX = getRandomFloat(35.65000, 35.70000, 2);
    let locationY = getRandomFloat(139.70000, 139.80000, 2);
    finalAds.push ({
      author: {
        avatar: 'img/avatars/user0' + [i+1] + '.png'
      },
      offer: {
        title: 'title-'+ [i+1],
        address: locationX + ', ' + locationY,
        price: getRandomIntFromRange(MIN, MAX),
        type: getRandomArrayElement(TYPES),
        rooms: getRandomIntFromRange(MIN, MAX_ROOMS),
        guests: getRandomIntFromRange(MIN, MAX_GUESTS),
        checkin: getRandomArrayElement(CHEKIN),
        checkout: getRandomArrayElement(CHEKOUT),
        features: getRandomLength(FEATURES),
        description: 'description-'+ [i+1],
        photos: getRandomLength(PHOTOS)
      },
      location:{
        x: locationX,
        y: locationY
      }
    });
  }
  return finalAds;
};
