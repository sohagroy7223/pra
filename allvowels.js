// let sentence = "Education is a powerful tool";
// sentence = sentence.toLowerCase(); // ছোট হাতের অক্ষরে রূপান্তর

// let vowels = ["a", "e", "i", "o", "u"];

// // চেক করা হচ্ছে সব vowel আছে কিনা
// let hasAllVowels = vowels.every((vowel) => sentence.includes(vowel));

// if (hasAllVowels) {
//     console.log("The string contains all the vowels (a, e, i, o, u).");
// } else {
//     console.log("The string does not contain all the vowels.");
// }

// or******OR******////

let sentence = "Education is a powerful tool";
let vowels = ["a", "e", "i", "o", "u"];

let hasAllVowels = vowels.every((vowel) => sentence.includes(vowel));

console.log(hasAllVowels);
