'use strict';

const IMAGES_SRC = [
  'photo',
  'kaboompics_Modern',
  'kaboompics_Arc',
];

const COUNT_IMAGES = IMAGES_SRC.length;

const Images = {
  MOBILE: document.querySelectorAll('.slider__image'),
  DESKTOP: document.querySelectorAll('.slider__images source'),
}

const controls = document.querySelectorAll('.controls__button');

const state = {
  currentPhoto: 0,
  prevPhoto: COUNT_IMAGES - 1,
};

const checkStateValue = (value) => {
  if (value === COUNT_IMAGES) {
    value = 0;
  } else if (value < 0) {
    value = COUNT_IMAGES - 1;
  }

  return value;
}

const switchPhotos = (control) => {
  Images.MOBILE.forEach((image) => {
    image.classList.remove('slidein');
  });

  if (control.classList.contains('controls__button--prev')) {
    --state.currentPhoto;
    --state.prevPhoto;
  } else {
    ++state.currentPhoto;
    ++state.prevPhoto;
  }

  state.currentPhoto = checkStateValue(state.currentPhoto);
  state.prevPhoto = checkStateValue(state.prevPhoto);

  for (let i = 0; i < Images.MOBILE.length; i++) {
    if (Images.MOBILE[i].classList.contains('slider__image--prev')) {
      Images.MOBILE[i].src = `img/${IMAGES_SRC[state.prevPhoto]}-mobile.jpg`;
      Images.DESKTOP[i].srcset = `img/${IMAGES_SRC[state.prevPhoto]}-desktop.jpg`;
    } else {
      Images.MOBILE[i].src = `img/${IMAGES_SRC[state.currentPhoto]}-mobile.jpg`;
      Images.DESKTOP[i].srcset = `img/${IMAGES_SRC[state.currentPhoto]}-desktop.jpg`;
    }
  }

  setTimeout(() => {
    document.querySelectorAll('.slider__image').forEach((image) => {
      image.classList.add('slidein');
    });
  }, 0);
};

controls.forEach((control) => {
  control.addEventListener('click', (evt) => {
    switchPhotos(evt.target);
  });
});
