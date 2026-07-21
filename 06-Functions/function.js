function MyFunction(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log("Sum =", sum);
}

MyFunction(5);
MyFunction(15);
MyFunction(150);

function alpha() {
  console.log("Hello bhai");
  console.log("kaise ho");
  console.log("Kaha ho");
  console.log("sb thk?");
}

let str = "Gaurav";
console.log(str);
alpha();

// ->4 Ways to create a function
//  1. Without parameter list & without return
//  2. Without parameter list & with return
//  3. With parameter list & without return
//  4. With parameter list & with return

function gamma(str) {
  console.log("hello bro", str);
}
gamma("manas");

// function greet(name) {
//   console.log(1);
//   console.log(2);
//   return "hello bro" + " " + name;
// }
// let a = greet("lambda");
// console.log(a);




// DEFAULT PARAMETERS

function greet(name = "Guest") {
  console.log(name);
}

greet();
