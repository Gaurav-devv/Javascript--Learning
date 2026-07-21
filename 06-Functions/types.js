// 1.==> NORMAL FUNCTION
function sum(a, b) {
  return a + b;
}

console.log(sum(20, 30));

// 2.==> FUNCTION EXPRESSION

const add = function (a, b) {
  return a + b;
};

console.log(add(10, 20));

// // 3.==> ARROW FUNCTION
// // Arrow Function to calculate percentage
// const calculatePercentage = (math, science, english) => {
//   return ((math + science + english) / 300) * 100;
// };

// // Arrow Function to determine grade
// const getGrade = (percentage) => {
//   if (percentage >= 90) {
//     return "A+";
//   } else if (percentage >= 80) {
//     return "A";
//   } else if (percentage >= 70) {
//     return "B";
//   } else if (percentage >= 60) {
//     return "C";
//   } else if (percentage >= 40) {
//     return "D";
//   } else {
//     return "Fail";
//   }
// };

// // Arrow Function to display result
// const displayResult = (name, percentage, grade) => {
//   console.log("===== STUDENT RESULT =====");
//   console.log("Name :", name);
//   console.log("Percentage :", percentage.toFixed(2) + "%");
//   console.log("Grade :", grade);
// };

// // Taking Input
// const studentName = prompt("Enter Student Name:");
// const math = Number(prompt("Enter Math Marks:"));
// const science = Number(prompt("Enter Science Marks:"));
// const english = Number(prompt("Enter English Marks:"));

// // Calling Arrow Functions
// const percentage = calculatePercentage(math, science, english);
// const grade = getGrade(percentage);

// displayResult(studentName, percentage, grade);

// ==> 4.ANONYMOUS FUNCTION

setTimeout(function () {
  console.log("Hello Gaurav");
}, 3000);

//==>5. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function () {
  console.log("Hello");
})();
