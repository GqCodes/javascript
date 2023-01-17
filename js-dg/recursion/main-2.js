/* Real Life examples */

// 1) Continuation token from an API

const getAwsProductIdImages = async () => {
  // get the data with await fetch request

  if (data.IsTruncated) {
    // recursive
    return await getAwsProductIdImages(
      productId,
      s3, //connection to s3
      resultArray, //Accumulator
      data.NextContinuationToken
    );
  }

  return resultArray;
};

/* 
2) A Parser:
  a company directory
  a file directory
  the DOM - a web crawler
  An XML or JSON data export
*/

// Export from you streaming service like spotify, YT music, etc...

const artistByGenre = {
  jazz: ['Miles Davis', 'John Coltrane'],
  rock: {
    classic: ['Bob Seger', 'The Eagles'],
    hair: ['Def Leppard', 'Whitesnake', 'Poison'],
    alt: {
      classic: ['Pearl Jam', 'The killers'],
      current: ['Joywave', 'Sir Sly'],
    },
  },
  unclassified: {
    new: ['Caamp', 'Neil Young'],
    classic: ['Seal', 'Morcheeba', 'Chris Stapleton'],
  },
};

const getArtistNames = (dataObj, arr = []) => {
  Object.keys(dataObj).forEach((key) => {
    if (Array.isArray(dataObj[key])) {
      return dataObj[key].forEach((artist) => {
        arr.push(artist);
      });
    }

    getArtistNames(dataObj[key], arr);
  });
  return arr;
};

console.log(getArtistNames(artistByGenre));
