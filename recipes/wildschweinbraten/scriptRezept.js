async function includeHTML() {
  let includeElements = document.querySelectorAll('[w3-include-html]');
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = 'Page not found';
    }
  }
}

function loadTable() {
  document.getElementById('portions').value = `1`;
}

function confirmIngredient1() {
  let firstNumber = +document.getElementById('portions').value;
  let secondNumber = 4;
  let result = firstNumber * secondNumber;
  document.getElementById('Ingredient1').innerHTML = `${result}`;
}

function confirmIngredient2() {
  let firstNumber = +document.getElementById('portions').value;
  let secondNumber = 1;
  let result = firstNumber * secondNumber;
  document.getElementById('Ingredient2').innerHTML = `${result}`;
}

function confirmIngredient3() {
  let firstNumber = +document.getElementById('portions').value;
  let secondNumber = 50;
  let result = firstNumber * secondNumber;
  document.getElementById('Ingredient3').innerHTML = `${result}`;
}

function confirmIngredient4() {
  let firstNumber = +document.getElementById('portions').value;
  let secondNumber = 60;
  let result = firstNumber * secondNumber;
  document.getElementById('Ingredient4').innerHTML = `${result}`;
}

function confirmIngredient5() {
  let firstNumber = +document.getElementById('portions').value;
  let secondNumber = 250;
  let result = firstNumber * secondNumber;
  document.getElementById('Ingredient5').innerHTML = `${result}`;
}

function confirmIngredient6() {
  let firstNumber = +document.getElementById('portions').value;
  let secondNumber = 2;
  let result = firstNumber * secondNumber;
  document.getElementById('Ingredient6').innerHTML = `${result}`;
}

function confirmIngredient7() {
  let firstNumber = +document.getElementById('portions').value;
  let secondNumber = 2;
  let result = firstNumber * secondNumber;
  document.getElementById('Ingredient7').innerHTML = `${result}`;
}

function confirmIngredient8() {
  let firstNumber = +document.getElementById('portions').value;
  let secondNumber = 1;
  let result = firstNumber * secondNumber;
  document.getElementById('Ingredient8').innerHTML = `${result}`;
}

function confirmIngredient9() {
  let firstNumber = +document.getElementById('portions').value;
  let secondNumber = 1;
  let result = firstNumber * secondNumber;
  document.getElementById('Ingredient9').innerHTML = `${result}`;
}

function checkNumber() {
  var zahl = parseFloat(document.getElementById('portions').value);
    if (isNaN(zahl)) {
      alert("Bitte geben Sie eine gültige Zahl ein.");
  } else if (zahl > 7 || zahl < 1) {
      alert("Die Zahl muss zwischen 1 und 7 liegen.");
  }
}