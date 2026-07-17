// let productsInStock = 2;
// if(productsInStock <= 0){
//     console.log("product is out of stock");
// }
// else{
//     console.log("product is in stock");
// }

// let weather = "rainy" ;

// if(weather === "rainy"){
//     console.log("Take an umbrella");
// }
// else{
//     console.log("enjoy the sunshine");
// }

// "ELSE IF LADDER"
// let score = 29;
// if (score >= 90){
//     console.log("A Grade")
// }
// else if(score>=80){
//     console.log("B Grade")
// }
// else if(score >= 70){
//     console.log("C Grade")
// }
// else{
//     console.log("Study Hard......")
// }

// // NESTED IF STATEMENT

// let age = 20;
// let hasIdCard = false;
//  if(age >= 18){
//     if(hasIdCard){
//         console.log("Welcome to the club")
//     }
//     else{
//         console.log("You need an id card")
//     }
//  }
//  else{
//     console.log("You are too young")
//  }

// // SWITCH STATEMENT
// let clr = "yellow";
// switch (clr) {
//   case "red":
//     console.log("stop..!");
//     break;
//   case "yellow":
//     console.log("warning");
//     break;
//   case "green":
//     console.log("go");
//     break;
//   default:
//     console.log("invalid color");
// }

// // CHALLENGE1 Discount on cart value
// let cartValue = 120;
// let discountedCartValue;

// if (cartValue < 50) {
//   discountedCartValue = cartValue;
//   console.log("No discount applied!");
// } else if (cartValue < 100) {
//   disountedCartalue = cartValue - cartValue * 0.1;
//   console.log("10% discount is applied");
// } else {
//   discountedCartValue = cartValue - cartValue * 0.2;
//   console.log("20% disccount is applied");
// }

// console.log("your final cartValue", discountedCartValue);

// // CHALLENGE 2
// let subscriptionType = "standard";

// if (subscriptionType === "premium") {
//   console.log("You have access of all content");
// } else if (subscriptionType === "standard") {
//   console.log("You have acces to limited content");
// } else {
//   console.log("not a valid subscription");
// }

// QUESTIONS
// Q1.
let theme = prompt("Choose your theme color(light,dark,pink,green) :");
if (theme === "light") {
  color = "white";
} else if (theme === "dark") {
  color = "black";
} else if ((theme = "pink")) {
  color = "pink";
} else if (theme === "green") {
  color = "green";
} else {
  console.log("Invalid color");
}
console.log(
  `Your selected theme is ${theme} and color is ${color} respectively`,
);
