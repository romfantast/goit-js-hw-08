import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const refs = {
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

const FORM_STATE = 'feedback-form-state';

if (localStorage.getItem(FORM_STATE)) {
  refs.email.value = JSON.parse(localStorage.getItem(FORM_STATE)).email || '';
  refs.message.value =
    JSON.parse(localStorage.getItem(FORM_STATE)).message || '';
}

let result = {};

formEl.addEventListener('input', throttle(handleFormInput, 500));

formEl.addEventListener('submit', handlerFormSubmit);

function handleFormInput(e) {
  result[e.target.name] = e.target.value;
  localStorage.setItem(FORM_STATE, JSON.stringify(result));
}

function handlerFormSubmit(e) {
  e.preventDefault();
  formEl.reset();
  localStorage.removeItem(FORM_STATE);
}
