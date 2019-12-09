function palindrome(str) {
  var lowercase = str.toLowerCase();
  var stringreverse = lowercase
    .split(' ')
    .reverse()
    .join(' ');
  return stringreverse;
}
const string1 = "ibu ratna antar ubi";
const string2 = "kasur ini rusak";
const result1 = palindrome(string1).split(' ');
const result2 = palindrome(string2).split(' ');
console.log(result1);
console.log(result2);