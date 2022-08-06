const resultEl = document.getElementById('result');
const clipboardBtn = document.getElementById('clipboard');
const lengthSetting = document.getElementById('length');
const uppercaseSetting = document.getElementById('uppercase');
const lowercaseSetting = document.getElementById('lowercase');
const numberSetting = document.getElementById('numbers');
const symbolSetting = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click', () => {
  const length = +lengthSetting.value;
  const uppercase = uppercaseSetting.checked;
  const lowercase = lowercaseSetting.checked;
  const number = numberSetting.checked;
  const symbol = symbolSetting.checked;

  resultEl.innerText = generatePassword(
    length,
    uppercase,
    lowercase,
    number,
    symbol
  );
});

clipboardBtn.addEventListener('click', async () => {
  const password = resultEl.innerText;
  const existingNotification = document.querySelector('.notification');

  if (password && !existingNotification) {
    await navigator.clipboard.writeText(password);

    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = 'Copied to clipboard!';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  }
});

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(length, upper, lower, number, symbol) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (type) => Object.values(type)[0]
  );

  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * typesCount);
    generatedPassword += randomFunction[Object.keys(typesArr[random])[0]]();
  }

  return generatedPassword;
}

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
