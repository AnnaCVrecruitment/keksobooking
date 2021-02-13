const getRandomIntFromRange = function(min, max) {
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
    console.log('Так как max должно быть больше min, поменяйте их местами');
    return -1;
  }

  if (n<0) {
    console.log('Поменяйте третий параметр');
    return -1;
  }

  return (Math.random() * (maxf - minf) + minf).toFixed(n);
};


const TITLES = [
  'title-1',
  'title-2',
  'title-3',
  'title-4',
  'title-5',
  'title-6',
  'title-7',
  'title-8'
];

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

const ROOMS = [1, 2, 3, 4, 5];

const GUESTS = [5, 10, 15, 20, 25, 30];

const PHOTOS = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

const min = 1;
const max = 1000000;

const AVATARS = [1, 2, 3, 4, 5, 6, 7, 8];

DESCRIPTIONS = [
  'description-1',
  'description-2',
  'description-3',
  'description-4',
  'description-5',
  'description-6',
  'description-7',
  'description-8'
];


/*выбор из массива*/

const getRandomArrayElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.lenght)]
};

/*случайная длина*/

const getRandomLenght = function (arr) {
  let lenghtArray = Math.floor(Math.random() * arr.lenght);
  let newArray = [];

  for(let i=0; i<lenghtArray; i = i + 1) {
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
        avatar: 'img/avatars/user0' + getRandomArrayElement(AVATARS) + '.png'
      },
      offer: {
        title: getRandomArrayElement(TITLES),
        address: location.x + ',' + location.y,
        price: getRandomIntFromRange(min, max),
        type: getRandomArrayElement(TYPES),
        rooms: getRandomArrayElement(ROOMS),
        guests: getRandomArrayElement(GUESTS),
        checkin: getRandomArrayElement(CHEKIN),
        checkout: getRandomArrayElement(CHEKOUT),
        features: getRandomLenghtI(FEATURES),
        description: getRandomArrayElement(DESCRIPTIONS),
        photos: getRandomLenght(PHOTOS)
      },
      location:{
        x: locationX,
        y: locationY
      }
    });
  }
  return finalAds;
};
