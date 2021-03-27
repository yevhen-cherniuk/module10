import { templates } from 'handlebars';
import data from '../data/menu.json';
import template from '../template/template.hbs';

const refs = {
  body: document.body,
  list: document.querySelector('.js-menu'),
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
refs.input.checked = localStorage.getItem('theme') === Theme.DARK;

const markup = template(data);
refs.list.insertAdjacentHTML('beforeend', markup);
refs.input.addEventListener('change', inputChangeOn);

function changeTheme(add, rem) {
  refs.body.classList.replace(rem, add);
  localStorage.setItem('theme', add);
}
function inputChangeOn({ target }) {
  target.checked
    ? changeTheme(Theme.DARK, Theme.LIGHT)
    : changeTheme(Theme.LIGHT, Theme.DARK);
}