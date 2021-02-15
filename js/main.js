const getRandomIntFromRange = function(Min, Max) {
  if (Min < 0) {
    console.log('Поменяйте первый параметр');
    return -1;
  }

  if (Max<0) {
    console.log('Поменяйте второй параметр');
    return -1;
  }

  if (Max<Min) {
    console.log('Так как Max должно быть больше Min, поменяйте их местами');
    return -1;
  }

  Min = Math.ceil(Min);
  Max = Math.floor(Max);
  return Math.floor(Math.random() * (Max - Min + 1)) + Min;
};

function getRandomFloat(Minf, Maxf, n) {
  if (Minf<0) {
    console.log('Поменяйте первый параметр');
    return -1;
  }

  if (Maxf<0) {
    console.log('Поменяйте второй параметр');
    return -1;
  }

  if (Maxf<Minf) {
    console.log('Так как Max должно быть больше Min, поменяйте их местами');
    return -1;
  }

  if (n<0) {
    console.log('Поменяйте третий параметр');
    return -1;
  }

  return (Math.random() * (Maxf - Minf) + Minf).toFixed(n);
};

const Min = 1;
const Max = 1000000;
const MaxRooms = 10;
const MaxGuests = 30;

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

const getRandomLenght = function (arr) {
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
        address: locationX + ',' + locationY,
        price: getRandomIntFromRange(Min, Max),
        type: getRandomArrayElement(TYPES),
        rooms: getRandomIntFromRange(Min, MaxRooms),
        guests: getRandomIntFromRange(Min, MaxGuests),
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
