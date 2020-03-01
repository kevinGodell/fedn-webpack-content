'use strict';

import { sw } from './js/sw';

import { submitForm } from './js/formHandler';

// all imported styles will be compiled

import './styles/resets.scss';
import './styles/base.scss';
import './styles/form.scss';
import './styles/footer.scss';
import './styles/header.scss';

/* document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', submitForm);
});*/

sw(); // register service worker (only if NODE_ENV === 'production')

const buttonClick = event => {
  window.location.pathname = '/settings.html';
};

const reload = event => {
  window.location.reload();
};

// must be exported to be callable in html
// webpack output library = <name> and libraryTarget = 'var'
// accessible as <name>.<function>
export { submitForm, buttonClick, reload };
