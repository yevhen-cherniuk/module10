import data from '../data/menu.json';
import template from '../template/template.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    body: document.body,
    list: document.querySelector('.js-menu'),
    input: document.querySelector('.theme-switch__control'),
}
refs.body.classList.add(
    localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme')
);
refs.input.checked = localStorage.getItem('theme') === Theme.DARK;

// refs.body.classList.add(Theme.LIGHT);

const markup = template(data);
refs.list.insertAdjacentHTML('beforeend', markup);

function changeTheme(add, rem) {
    refs.body.classList.remove(rem);
        refs.body.classList.add(add);
        localStorage.setItem('theme',add)
    
}

refs.input.addEventListener('change', inputChangeOn);
function inputChangeOn({ target }) {
    if (target.checked) {
        changeTheme(Theme.DARK, Theme.LIGHT);
    }
    else {
        changeTheme( Theme.LIGHT , Theme.DARK);
    }
}

