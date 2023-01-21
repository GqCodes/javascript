/* Synchronous Code example */
posts = loadPostsSync();
// ...wait til the posts are fetched
//...do something with posts

doTheNextThing(); //Has to wait until posts load

/* Aynchronous Code Example - in this case you pass in a callback function, the callback will run and fetch the posts but it doesnt stop from the program from running unlike the example above */
loadPostsAsync(function () {
  // ...wait til the posts are fetched
  //...do something with posts
});
doTheNextThing(); //DOES NOT have to wait until posts load

/* Ways of working with Async Code:
  1) Callbacks
  2) Promises
  3) Async/Await
*/
