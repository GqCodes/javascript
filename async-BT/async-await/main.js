// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Hello');
//     }, 1000);
//   });

//   const error = true;

//   if (!error) {
//     const res = await promise; //wait until the promise is resolved
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
//   return res;
// }

// myFunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function getUsers() {
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // only proceed once its resolve
  const data = await response.json();

  // only proceed once second promise is resolved
  return data;
}

getUsers().then((users) => console.log(users));
