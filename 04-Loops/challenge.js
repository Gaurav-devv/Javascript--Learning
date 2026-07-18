// Challenge 1.
// Print all even numbers from 0 to 100.

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Challenge 2:
// Calculate how many vowels and consonents are in a given string using for of loop

let string = "Gaurav Tiwari";
let vowelCount = 0,
  consonentCount = 0;
for (let letter of string) {
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u" ||
    letter === "A" ||
    letter === "E" ||
    letter === "I" ||
    letter === "O" ||
    letter === "U"
  ) {
    vowelCount++;
  } else if (letter === " ") {
    console.log("Space not counted");
  } else {
    consonentCount++;
  }
}
console.log("Vowel =" + vowelCount);
console.log("Consonent = " + consonentCount);
