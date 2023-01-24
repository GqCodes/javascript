/* Example 1: Fetching user emails from an API of users */
const getAllUserEmails = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const jsonUserData = await response.json();

  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });

  console.log(userEmailArray);
};
getAllUserEmails();

/* Example 2: Get dad jokes from an API */
const getDadJokes = async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  const jsonJokeData = await response.json();

  console.log(jsonJokeData);
};

getDadJokes();

/* Example 3: Sending (POST) a dad joke to an API  */
const jokeObj = { id: 'ea2wkyscah', joke: 'What does an angry pepper do? It gets jalapeño face.' };

const postData = async (jokeObj) => {
  const response = await fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jokeObj),
  });

  const jsonResponse = await response.json();

  console.log(jsonResponse);
};
postData(jokeObj);

/* Example 4: Pass data in through the URL using "GET" */

const requestJoke = async (firstName, lastName) => {
  const response = await fetch(`https://api.chucknorris.io/jokes/random?firstName=${firstName}&lastName=${lastName}`);
  const jsonResponse = await response.json();

  console.log(jsonResponse.value);
};

requestJoke('Clint', 'Eastwood');
