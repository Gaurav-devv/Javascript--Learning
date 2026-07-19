// NUMBER KNOCK GAME(ASK THE USER TO KEEP GUESSING THE NUMBER UNTIL THE USER
//ENTERS CORRECT GUESS.)

let computerNumber = 6;
let guess;
while (guess !== computerNumber) {
  guess = Number(prompt("Enter correct number:"));

  if (isNaN(guess)) {
    alert("Number is invalid, please try again!");
  } else if (guess < computerNumber) {
    alert("Number is too low!, please try againn!");
  } else if (guess > computerNumber) {
    alert("Number is too big!,please try again");
  } else {
    alert("Congratulation!... Your guess is correct");
  }
}

//SIMPLE PASSWORD CHECKER[FIXED ATTEMPTS]
