// Q1. Write a regular function that likes a string and returns it withthe first letter capitaized.
function capitalizeFirstLetter(str) {
  console.log(str.charAt().toUpperCase() + str.slice(1));
}

capitalizeFirstLetter("Gaurav");

// Q2 Show an alert message that says “Please login” after 5 seconds on your website.
setTimeout(() => {
  alert("Please Login");
}, 5000);

// 3. Make an arrow function that takes a price and a discount, and returns the price after
// discount.

let calculatedDiscountPrice = (price, discount) => {
  let discountedPrice = price - price * (discount / 100);
  return discountedPrice;
};
let result = calculatedDiscountPrice(1500, 20);
console.log(result);

// 4. Create a function that builds a username from a full name.
function generateUsername(fullName) {
  return "@" + fullName.trim() + fullName.length;
}
console.log(generateUsername("gaurav"));

// 5. Write a function that takes a traffic light color and gives the correct instruction (e.g. "go"
// for green, "stop" for red, "caution" for yellow, and "invalid color" for anything else).

function generateInstructions(color) {
  if (color === "green") {
    console.log("go");
  } else if (color === "red") {
    console.log("stop");
  } else if (color === "yellow") {
    console.log(caution);
  } else {
    console.log("invalid color");
  }
}
generateInstructions("red");
