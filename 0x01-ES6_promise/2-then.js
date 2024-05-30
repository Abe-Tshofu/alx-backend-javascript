// 2-main.js
import handleResponseFromAPI from './2-then.js';

const promise = Promise.resolve();
handleResponseFromAPI(promise).then(response => console.log(response));

const failingPromise = Promise.reject();
handleResponseFromAPI(failingPromise).catch(error => console.log(error));
