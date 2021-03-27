import data from '../data/menu.json';
import template from '../template/template.hbs';
const refs = {
  body: document.body,
  list: document.getElementsByClassName('js-menu')[0],
  input: document.querySelector('.theme-switch__toggle'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
refs.body.classList.add(
  localStorage.getItem('theme') === null
    ? Theme.LIGHT
    : localStorage.getItem('theme'),
);
const markup = template(data);
refs.input.checked = localStorage.getItem('theme') === Theme.DARK;
refs.list.insertAdjacentHTML('beforeend', markup);
refs.input.addEventListener('change', inputChangeOn);
function changeTheme(add, rem) {
  refs.body.classList.remove(rem);
  refs.body.classList.add(add);
  localStorage.setItem('theme', add);
}
function inputChangeOn({ target }) {
  if (target.checked) {
    changeTheme(Theme.DARK, Theme.LIGHT);
  } else {
    changeTheme(Theme.LIGHT, Theme.DARK);
  }
}