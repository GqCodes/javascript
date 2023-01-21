document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // create XHR object
  const xhr = new XMLHttpRequest();

  // OPEN: this is where we specify the type of request we want to make and the URL or file name we want to make it to. Essentially, what are we doing, get request & from where are we getting data from
  xhr.open('GET', 'data.txt', true); //(type of request, where the request is going, async = true)

  xhr.onload = function () {
    // in here is where we do whatever we want to do with the data that we get

    // first we check if everyting is ok:
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  xhr.send(); //to finalize everything you have to call send
}
