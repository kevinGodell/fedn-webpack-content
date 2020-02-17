'use strict';

import { submitForm } from './js/formHandler';

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', submitForm);
});
