// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  /* Method 1 */
  const strArr = str.split('');
  strArr.reverse();
  return strArr.join('');

  /* Method 2 */
  return str.split('').reverse().join('');

  /* Method 3 */
  let revString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  return revString;

  /* Method 4 */
  let revString = '';
  for (let i = 0; i <= str.length - 1; i++) {
    revString = str[i] + revString;
  }
  return revString;

  // /* Method 5 */
  let revString = '';
  for (let char of str) {
    revString = char + revString;
  }
  return revString;

  /* Method 6 */
  let revString = '';
  str.split('').forEach((char) => (revString = char + revString));
  return revString;

  /* Method 7 */
  return str.split('').reduce((revString, char) => char + revString, '');
}

// Call Function
const output = reverseString('hello');
console.log(output);
