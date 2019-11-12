'use strict';

const IMAGES = [
  'photo.jpg',
  'kaboompics_Modern.jpg',
  'kaboompics_Arc.jpg',
];

const controls = document.querySelectorAll('.controls__button');

let state = 0;

const switchPhotos = (control) => {
  document.querySelectorAll('.slidein').forEach((it) => {
    it.classList.remove('slidein');
  });

  control.classList.contains('controls__button--prev') ? state-- : state++;
  console.log(state);

  if (state === -1 || state === 0) {
    state = IMAGES.length - 1;
    document.querySelector('.slider__image--prev').src = `img/${IMAGES[state - 1]}`;
    document.querySelector('.slider__image--current').src = `img/${IMAGES[state]}`;
    document.querySelector('.slider__image-box--prev source').srcset = `img/${IMAGES[state - 1]}`;
    document.querySelector('.slider__image-box--current source').srcset = `img/${IMAGES[state]}`;
  } else if (state === IMAGES.length) {
    state = 0;
    document.querySelector('.slider__image--prev').src = `img/${IMAGES[IMAGES.length - 1]}`;
    document.querySelector('.slider__image--current').src = `img/${IMAGES[state]}`;
    document.querySelector('.slider__image-box--prev source').srcset = `img/${IMAGES[IMAGES.length - 1]}`;
    document.querySelector('.slider__image-box--current source').srcset = `img/${IMAGES[state]}`;
  } else {
    document.querySelector('.slider__image--prev').src = `img/${IMAGES[state - 1]}`;
    document.querySelector('.slider__image--current').src = `img/${IMAGES[state]}`;
    document.querySelector('.slider__image-box--prev source').srcset = `img/${IMAGES[state - 1]}`;
    document.querySelector('.slider__image-box--current source').srcset = `img/${IMAGES[state]}`;
  }
  console.log(state);
  console.log('-------');


  setTimeout(() => {
    document.querySelectorAll('.slider__image').forEach((it) => {
      it.classList.add('slidein');
    });
  }, 0);
};

controls.forEach((control) => {
  control.addEventListener('click', (evt) => {
    switchPhotos(evt.target);
  });
});
