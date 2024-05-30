// 0-promise.js
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    resolve('Success'); // You can change this to reject('Error') to simulate an error
  });
}
