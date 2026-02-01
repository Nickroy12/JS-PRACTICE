const sentence = "I am learning web dev."
let reverse = ""
// for (let letter of sentence){
//     // console.log(letter);
//     reverse = letter + reverse;   
// }


// for (let i = 0; i < sentence.length; i++){
//     // console.log(sentence[i]);
//         reverse = sentence[i] + reverse;   
// }
// console.log(reverse);

// shortcut 
const reversed = sentence.split( " " ).reverse().join(' ')
console.log(reversed);

