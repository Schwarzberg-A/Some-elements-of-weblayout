'use strict';

const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  searchEnabled: false
});
const sel = document.querySelector('.is-focused');


//  document.querySelector('.js-choice').addEventListener('change', function() {
//   console.log(document.querySelector('.is-selected').innerHTML);
//  })





new SimpleBar(document.getElementById('scrolling'), {
  autoHide: false,
  scrollbarMinSize: 70,
  scrollbarMaxSize: 70,
});




var selector = document.getElementById("phone");
var im = new Inputmask("+7 (999) 999 9999");
im.mask(selector);





new window.JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        console.log(phone);
        return (Number(phone) && phone.length === 10);
      }
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: {
      required: 'введите, пожалуйста, ваше имя',
      minLength: 'минимум 2 символа',
      maxLength: 'минимум 30 символов'
    },
    email: {
      required: 'введите, пожалуйста, ваш E-mail',
      email: 'введите, пожалуйста, корректный E-mail'
    },
    tel: {
      required: 'введите, пожалуйста, ваш телефон',
      function: 'введите, пожалуйста, корректный телефон'
    },
  }
});
