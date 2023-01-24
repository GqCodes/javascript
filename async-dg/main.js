/*===== Async / Await =====*/
const myUsers = {
  userList: [],
};

// async function myCoolFunction() {};
const myCoolFunction = async () => {
  // this tell the code to WAIT for the fetch to complete BEFORE doing what comes next
  // to use the keyword AWAIT, it must be within an ASYNC function
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const jsonUserData = await response.json();
  console.log(jsonUserData);
  return jsonUserData;
};

myCoolFunction();

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotherFunc();
