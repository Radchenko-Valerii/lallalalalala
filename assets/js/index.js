// let n=30;
// while(n>1){
//   --n
//   console.log(n%2 === 0 ? n : --n)
// }

// let password = prompt('Enter password');
// let n=0;
// while(n<4 && password !== 'admin'){
//   n++
//   password = prompt('Wrong, enter password')
//   if(password === 'admin'){
//     alert('Welcome')}
//   continue;
// }


// let factorialNum = +prompt('Enter the number');
// let i=1;
// let result=1;
// if(isNaN(factorialNum)){
//   result=null
// }
// if(factorialNum<0){
//   result=null
// }
// for (i; i <= factorialNum; ++i){
//   result =result*i;
// }
// alert(result);

// const object = {
//   on: function(){
//     alert('Object on')
//   },
//   off: function(){
//     alert('Object off')
//   },
//   value: 30
// }
// alert(object);

function Ant (name, sizeInInch, weightInGramms, isMale, ageInMonths){
  this.name = name,
  this.sizeInInch = sizeInInch,
  this.weightInGramms = weightInGramms,
  this.isMale = isMale,
  this.ageInMonths = ageInMonths
  this.work = function(){
    alert("I'm busy, i'm work!!!!")
  }
}

const Antz1 = new Ant ('Nikita', '1.02', '0.73', true, 3);
console.log(Antz1);