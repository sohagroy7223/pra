// const names = "chamta hat high school Amar name Akash";
// let count = 0;
// console.log(names);
// for (let n = 0; n < names.length; n++) {
//     // console.log(n);
//     if (names[n].toLowerCase() === "a") {
//         count++;
// }
// console.log("number a count= ", count);

const sentence = "Amar sonar bangla Ami tomay blobashi";
let count = 0;
for (let i = 0; i < sentence.length; i++) {
    console.log(i);
    if (sentence[i] === "a" || sentence[i] === "A") {
        count++;
    }
}
console.log("totla number a or A =", count);
