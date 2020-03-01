'use strict';

const prod = async () => {
  console.log('before register');

  if ('serviceWorker' in navigator) {
    console.log('serviceWorker in navigator');

    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js');
      console.log('SW registered: ', registration);
    } catch (e) {
      console.error('SW registration failed: ', e);
    }
  }

  console.log('after register');
};

const dev = () => {
  console.log('dev mode, service workers not needed');
};

const sw = process.env.NODE_ENV === 'production' ? prod : dev;

export { sw };
