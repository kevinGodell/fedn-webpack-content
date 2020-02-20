'use strict';

import { submitForm } from './js/formHandler';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/form.scss';
import './styles/footer.scss';
import './styles/header.scss';

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', submitForm);
});

// export { submitForm };
