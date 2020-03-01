'use strict';

import { sw } from './js/sw';

import { saySomething } from './js/formHandler';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/form.scss';
// import './styles/footer.scss';
import './styles/header.scss';

sw();

export { saySomething };
