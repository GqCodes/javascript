/* FETCH API */
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

// get local text file
function getText() {
  fetch('test.txt')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log(err));
}

// get local JSON data
function getJSON() {
  fetch('posts.json')
    .then((response) => response.json())
    .then((data) => {
      let output = '';
      data.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err));
}

// get API data
function getExternal() {
  fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then((data) => {
      let output = '';
      data.forEach((user) => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err));
}
