//Btn elements
const btnEl = document.querySelectorAll(".btn");
const textEl = document.querySelector(".text");
const resetEl = document.querySelector(".reset");
const equalEl = document.querySelector(".equals");
const decimalEl = document.querySelector(".decimal");
const plusEl = document.querySelector(".plus");
const delEl = document.querySelector(".del");
const multEl = document.querySelector(".times");
const minEl = document.querySelector(".minus");
const divideEl = document.querySelector(".divide");
const numBtnsEl = document.querySelectorAll('.num-btn')

//Container elements 
const calcHeadEl = document.querySelector('.calc-head')
const bodyEl = document.querySelector('body');
const funcBallEl = document.querySelector('.function-ball')
const calcBodyEl = document.querySelector('.calc-body')
const calcContEl = document.querySelector('.calc-container')
const calcScreenEl = document.querySelector('.calc-screen ')
const ballEl = document.querySelector('.function-ball')
const functEl = document.querySelector('.function-btn')
btnEl.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let operation = btn.textContent;
    if (!isNaN(+operation)) {
      // formatNum(+operation);

      textEl.innerHTML += +operation;
    } else return;
  });
});
numBtnsEl.forEach((btn) => {
  btn.addEventListener('click', function() {
    let num = btn.textContent
    switch(num) {
      case '1': themeOne();break;
      case '2': themeTwo();break;
      case '3': themeThree();break
    }
  });
});

// function formatNum(num) {
//   let wholeNum = textEl.textContent;
//   console.log(wholeNum.length + 1);
//   if (wholeNum.includes(",")) {
//     wholeNum = wholeNum.split(",");
//     wholeNum = wholeNum.join("");
//     if ((wholeNum.length + 1) % 4 === 0) {
//       textEl.innerHTML += ",";
//       textEl.innerHTML += num;
//       return;
//     }
//   }
//   textEl.innerHTML += num;
// }
// let count = 0;
// function formatNum(num) {
//   console.log(count);
//   count++;
//   textEl.innerHTML += num;
//   if (count % 3 === 0) {
//     textEl.innerHTML += ",";
//     return;
//   }
//   return;
// }
let operand1;
let operand2;
let equalVal;
let operation;
let currentTheme = 1;
resetEl.addEventListener("click", function () {
  operand1 = 0;
  operand2 = 0;
  equalVal =
  textEl.innerHTML = "";
});

equalEl.addEventListener("click", function () {
  operand2 = +textEl.innerHTML;

  switch (operation) {
    case "+":
      equalVal = operand1 + operand2;
      break;
    case "-":
      equalVal = operand1 - operand2;
      break;
    case "x":
      equalVal = operand1 * operand2;
      break;
    case "/":
      equalVal = operand1 / operand2;
      break;
  }
  operation = "";
  if(String(equalVal).length > 10) {

    textEl.innerHTML = Number(equalVal).toFixed(5);
  }
  else 
  textEl.innerHTML = Number(equalVal);
});

decimalEl.addEventListener("click", function () {
  if (!textEl.innerHTML.includes(".")) {
    textEl.innerHTML += ".";
  }
});
plusEl.addEventListener("click", function () {
  operand1 = +textEl.innerHTML;
  operation = "+";
  textEl.innerHTML = "";
});

delEl.addEventListener("click", function () {
  textEl.innerHTML = textEl.innerHTML.slice(0, -1);
});

minEl.addEventListener("click", function () {
  operand1 = textEl.innerHTML;
  operation = "-";
  textEl.innerHTML = "";
});
divideEl.addEventListener("click", function () {
  operand1 = textEl.innerHTML;
  operation = "/";
  textEl.innerHTML = "";
});

multEl.addEventListener("click", function () {
  operand1 = textEl.innerHTML;
  operation = "x";
  console.log(operation);
  textEl.innerHTML = "";
});


function themeOne() {
  if(currentTheme != 1) {
    calcHeadEl.style.color = 'white'
    bodyEl.style.backgroundColor = 'hsl(222, 26%, 31%)'
    resetEl.style.backgroundColor = delEl.style.backgroundColor = 'hsl(225, 21%, 49%)';
    resetEl.style.boxShadow = delEl.style.boxShadow = '0 4px 0 hsl(224, 28%, 35%)';
    equalEl.style.backgroundColor = 'hsl(6, 63%, 50%)'
    equalEl.style.boxShadow = '0 4px 0 hsl(6, 70%, 34%)'
    funcBallEl.style.transform =  'translate(-50%, -50%)';
    calcScreenEl.style.backgroundColor = 'hsl(224, 36%, 15%)'
    calcBodyEl.style.backgroundColor =  'hsl(223, 31%, 20%)'
    calcScreenEl.style.color = 'white'
    ballEl.style.backgroundColor = 'hsl(6, 63%, 50%)'
    functEl.style.backgroundColor = 'hsl(224, 36%, 15%)'

    currentTheme = 1
  }
}
function themeTwo() {
  if(currentTheme != 2) {
    calcHeadEl.style.color = 'hsl(60, 10%, 19%)'
    bodyEl.style.backgroundColor = 'hsl(0, 0%, 90%)'
    
    calcScreenEl.style.backgroundColor = 'hsl(0, 0%, 93%)'
    calcBodyEl.style.backgroundColor =  'hsl(0, 5%, 81%)'
    resetEl.style.backgroundColor = delEl.style.backgroundColor = 'hsl(185, 42%, 37%)';
    resetEl.style.boxShadow = delEl.style.boxShadow = '0 4px 0 hsl(185, 58%, 25%)';
    equalEl.style.backgroundColor = 'hsl(25, 98%, 40%)'
    equalEl.style.boxShadow = '0 4px 0 hsl(25, 99%, 27%)'
    calcScreenEl.style.color = 'hsl(60, 10%, 19%)'
    ballEl.style.backgroundColor = ' hsl(25, 98%, 40%)'
    functEl.style.backgroundColor = 'hsl(224, 36%, 15%)'
    funcBallEl.style.transform =  'translate(50%, -50%)';
    functEl.style.backgroundColor = 'hsl(0, 5%, 81%)'
    console.log('2')
    currentTheme = 2;
  }
}
function themeThree() {
  if(currentTheme != 3) {
    calcBodyEl.style.backgroundColor = calcScreenEl.style.backgroundColor = 'hsl(268, 71%, 12%)'
    calcScreenEl.style.color = 'hsl(52, 100%, 62%)'
    ballEl.style.backgroundColor = 'hsl(176, 100%, 44%)'
    calcHeadEl.style.color = 'hsl(52, 100%, 62%)'
    calcContEl.style.color = 'hsl(60, 10%, 19%)'
    bodyEl.style.backgroundColor = 'hsl(268, 75%, 9%)'
    resetEl.style.backgroundColor = delEl.style.backgroundColor = 'hsl(281, 89%, 26%)';
    resetEl.style.boxShadow = delEl.style.boxShadow = '0 4px 0 hsl(285, 91%, 52%)';
    equalEl.style.backgroundColor = 'hsl(176, 100%, 44%)'
    equalEl.style.boxShadow = '0 4px 0 hsl(177, 92%, 70%)'
    funcBallEl.style.transform =  'translate(150%, -50%)';
    functEl.style.backgroundColor = 'hsl(281, 89%, 26%)'
    currentTheme = 3
  }
} 



