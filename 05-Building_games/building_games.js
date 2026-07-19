// // NUMBER KNOCK GAME(ASK THE USER TO KEEP GUESSING THE NUMBER UNTIL THE USER
// //ENTERS CORRECT GUESS.)

// let computerNumber = 6;
// let guess;
// while (guess !== computerNumber) {
//   guess = Number(prompt("Enter correct number:"));

//   if (isNaN(guess)) {
//     alert("Number is invalid, please try again!");
//   } else if (guess < computerNumber) {
//     alert("Number is too low!, please try againn!");
//   } else if (guess > computerNumber) {
//     alert("Number is too big!,please try again");
//   } else {
//     alert("Congratulation!... Your guess is correct");
//   }
// }

// //SIMPLE PASSWORD CHECKER[FIXED ATTEMPTS]

// let password = "alpha";
// let noOfAttempt = 0;
// let userPassword = null;

// while (password !== userPassword && noOfAttempt < 3) {
//   userPassword = prompt("Enter password:");
//   noOfAttempt++;

//   if (password == userPassword) {
//     alert("Congratulations you password is correct");
//   } else if (noOfAttempt >= 3) {
//     alert("Your attempt is over");
//   } else {
//     alert("Your password is in correct, please try again");
//   }
// }

// // FACTORIAL OF A NUMBER

// let n = 7;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }
// console.log("factorial = ", fact);

// Pattern
let n = 5;
for (i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str = str + j + " ";
  }
  console.log(str);
}

