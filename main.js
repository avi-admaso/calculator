let numbers = document.getElementsByClassName("numbers");
let screen = document.getElementById("screen");
function numbersScreen() {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].onclick = () => {
      screen.innerText += numbers[i].value;
    };
  }
}
numbersScreen();

let firstNum = 0;
let secondNum = 0;
let sum = 0;
function operators(operator) {
  firstNum = Number(screen.innerText);
  switch (operator) {
    case "+":
      screen.innerText = " ";
      btnSum.onclick = () => {
        secondNum = Number(screen.innerText);
        sum = firstNum + secondNum;
        screen.innerText = sum;
      };
      break;
    case "-":
      screen.innerText = " ";
      btnSum.onclick = () => {
        secondNum = Number(screen.innerText);
        sum = firstNum - secondNum;
        screen.innerText = sum;
      };
      break;
    case "*":
      screen.innerText = " ";
      btnSum.onclick = () => {
        secondNum = Number(screen.innerText);
        sum = firstNum * secondNum;
        screen.innerText = sum;
      };
      break;
    case "/":
      screen.innerText = " ";
      btnSum.onclick = () => {
        secondNum = Number(screen.innerText);
        sum = firstNum / secondNum;
        screen.innerText = sum;
      };
      break;
    default:
      screen.innerText = " ";
      firstNum = 0;
      secondNum = 0;
      sum = 0;
      break;
  }
}

let actions = document.getElementsByClassName("actions");
for (let i = 0; i < actions.length; i++) {
  actions[i].onclick = () => {
    operators(actions[i].value);
  };
}
