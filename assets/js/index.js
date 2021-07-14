// const minNumOfTwoNumbers = function(firstNum, secondNum) {
//   if (firstNum > secondNum) {
//     return (secondNum)
//   }
//   if (firstNum < secondNum) {
//     return (firstNum)
//   }
//   else {
//     return (firstNum)
//   }
// }

// const result = minNumOfTwoNumbers(1, 1);
// console.log(result);




// const maxNumOfTwoNumbers = function(first_Num, second_Num) {
//   if (first_Num < second_Num) {
//     return (second_Num)
//   }
//   if (first_Num < second_Num) {
//     return (first_Num)
//   }
//   else {
//     return (first_Num)
//   }
// }

// const result = maxNumOfTwoNumbers(1, 22);
// console.log(result);





// const chetnoeChisclo = function (value1) {
//   if ((value1 % 2)>0)  {
//     return false;
//   } else {
//     return true;
//   }
// }

// const x = chetnoeChisclo(1);
// console.log(x);


// const quadUravn = function(a, b, c) {
//   let x1; 
//   let x2;
//   const Discr = b*b - 4*a*c;
//   if (Discr<0) {
//   return NaN;
// } else {
//     const x1 = (-b + Math.sqrt(Discr))/(2*a)
//   const x2 = (-b - Math.sqrt(Discr))/(2*a)
//   return x1 + ('; '+ x2+';');
//   }
// }
// const v = quadUravn(); 
// console.log(v);

const firstValue = +prompt('Введите число');
const symbol = prompt('Введите знак');
const secondValue = +prompt('Введите число');
let result;
switch(symbol){
  case '+':{
    alert(result = firstValue + secondValue);
    break;
  }
  case '-':{
    alert(result = firstValue - secondValue);
    break;
  }
  case '*':{
    alert(result = firstValue * secondValue);
    break;
  }
  case '/':{
    alert(result = firstValue / secondValue);
    break;
  }
  case '^':{
    alert(result = firstValue ** secondValue);
    break;
  }
}
