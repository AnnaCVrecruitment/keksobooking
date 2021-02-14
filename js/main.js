<<<<<<< HEAD
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

const PHOTOS = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

const min = 1;
const max = 1000000;


/*выбор числа, включая значения */
const getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*выбор из массива*/

const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

var FinalAd = [];


FinalAd.push({
  return {
    author: {
      avatar
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address:,
      price: getRandomNumber(min,max),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomNumber(min,max),
      guests: getRandomNumber(min,max),
      checkin: getRandomArrayElement(CHEKIN),
      checkout: getRandomArrayElement(CHEKOUT),
      features:,
      description:,
      photos:
    },
    location:{}
  }
)};
=======
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
>>>>>>> master
