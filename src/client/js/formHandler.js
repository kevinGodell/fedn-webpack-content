'use strict';

const saySomething = val => {
  console.log(val);
};

const submitForm = e => {
  e.preventDefault();
  const form = e.currentTarget;
  const { elements, action, method } = form;
  fetch(action)
    .then(res => res.json())
    .then(function(res) {
      console.log(res.message);
      document.getElementById('results').innerHTML = res.message;
    });
};

export { saySomething, submitForm };
