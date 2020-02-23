'use strict';

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
