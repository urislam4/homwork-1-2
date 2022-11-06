let words = ['a','b','c','d','e','f'];
for(let word of words) {
    word = word.charAt(0).toUpperCase() + word.substr(1);
    console.log(word);
}
