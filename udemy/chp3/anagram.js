//algorithm for comparing 2 strings to see if they are anagrams

// function isAnagram(word1, word2) {
//   if (typeof word1 !== 'string' || typeof word2 !== 'string') {
//     throw new Error('isAnagram requires two strings to be passed.')
//   }

//   var normalizedWord1 = word1.replace(/[^A-Za-z]+/g, '').toLowerCase();
//   var normalizedWord2 = word2.replace(/[^A-Za-z]+/g, '').toLowerCase();
//   console.log("1: " + normalizedWord1);
//   console.log("2: " + normalizedWord2);


//   var counts = [];
//   var word1Length = normalizedWord1.length;
//   var word2Length = normalizedWord2.length

//   if (word1Length !== word2Length) { return false; }

//   for (var i = 0; i < word1Length; i++) {
//     var index = normalizedWord1.charCodeAt(i)-97;
//     counts[index] = (counts[index] || 0) + 1;
//   }

//   for (var i = 0; i < word2Length; i++) {
//     var index = normalizedWord2.charCodeAt(i)-97;
//     if (!counts[index]) { return false; }
//     else { counts[index]--; }
//   }

//   return true;
// }

// console.log(isAnagram("dog","god"));

function isAnagram (str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }
    
    var sortStr1 = str1.split('').sort().join('');
    var sortStr2 = str2.split('').sort().join('');

    console.log(sortStr1 + " " + sortStr2);

    return (sortStr1 === sortStr2);
}

console.log(isAnagram('dog','god')); // true
console.log(isAnagram('foo','bar')); // false
console.log(isAnagram('foo','fooo')); // false
