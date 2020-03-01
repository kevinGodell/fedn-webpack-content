'use strict';

const saySomething = val => {
  console.log(val);
};

const submitForm = async e => {
  e.preventDefault();
  const form = e.currentTarget;
  const { elements, action, method } = form;
  /* fetch(action)
    .then(res => res.json())
    .then(function(res) {
      console.log(res.message);
      document.getElementById('results').innerHTML = res.message;
    });*/
  try {
    const res = await fetch(action);
    // console.log(res);
    const json = await res.json();
    // console.log(json);
    document.getElementById('results').innerHTML = json.message;
  } catch (e) {
    console.error(e);
  }
};

export { saySomething, submitForm };
