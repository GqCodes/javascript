/* CALLBACKS */
// a function thats passed into another function as a parameter and ran inside the function body

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

/*============ Ex: done in a 'synchronous' way NOT using callbacks ==========*/

// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts(post) {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li> ${post.title} </li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: 'Post Three', body: 'This is post three' });
// getPosts();

/*============ Ex: done asynchronous using callbacks ==========*/

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts(post) {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li> ${post.title} </li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

