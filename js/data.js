import {getRandomIntFromRange, getRandomFloat, getRandomArrayElement, getRandomLength} from './util.js';

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
