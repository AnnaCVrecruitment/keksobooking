import {createAds} from './data.js';

const offers = createAds(10);

const mapCanvas = document.querySelector('#map-canvas');
const typeCard = {
  flat: 'Квартира',
  bungalo: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const similarAdTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');


const photoTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup__photo');


const  pastePhotos = function (element, array) {
  element.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    let adPhoto = photoTemplate.cloneNode(true);
    adPhoto.src = array[i];
    element.appendChild(adPhoto);
  }
};


const pasteFeatures = function (element, array) {
  element.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    let adFeature = document.createElement('li');
    adFeature.classList.add('popup__feature');
    adFeature.classList.add('popup__feature--' + array[i]);
    element.appendChild(adFeature);
  }
};


const createSimilarAdvert = function(card) {
  const similarAdElement = similarAdTemplate.cloneNode(true);

  similarAdElement.querySelector('.popup__title').textContent = card.offer.title;
  similarAdElement.querySelector('.popup__text--address').textContent = card.offer.address;
  similarAdElement.querySelector('.popup__text--price').textContent = card.offer.price + ' ₽/ночь';
  similarAdElement.querySelector('.popup__type').textContent = typeCard[card.offer.type];
  similarAdElement.querySelector('.popup__text--capacity').textContent = card.offer.rooms + ' комнаты для ' + card.offer.guests + ' гостей';
  similarAdElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + card.offer.checkin + ', выезд до ' + card.offer.checkout;
  pasteFeatures(similarAdElement.querySelector('.popup__features'),card.offer.features)
  similarAdElement.querySelector('.popup__description').textContent = card.offer.description;
  pastePhotos(similarAdElement.querySelector('.popup__photos'),card.offer.photos);
  similarAdElement.querySelector('.popup__avatar').src = card.author.avatar;

  mapCanvas.appendChild(similarAdElement);
}

createSimilarAdvert(offers[0]);

