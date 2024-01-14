let currentNumber = '0';
let displayNumber = false;

const updateNumber = (value) => {
  if (currentNumber === '0' || displayNumber) {
    currentNumber = value;
  } else {
    currentNumber += value;
  }

  displayNumber = false;

  updateScreen();
};

const updateScreen = () => {
  const screen = document.querySelector('.screen');
  screen.textContent = currentNumber;
};

const result = () => {
  const result = eval(currentNumber);
  currentNumber += ` = ${result}`;

  updateScreen();

  displayNumber = true;
};

const removeLastNumber = () => {
  currentNumber = currentNumber.slice(0, -1);

  if (currentNumber === "") {
    currentNumber = "0";
  }

  updateScreen();
};

const clearScreen = () => {
  currentNumber = '0';
  displayNumber = false;

  updateScreen();
}
