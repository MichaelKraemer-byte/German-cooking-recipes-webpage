async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}

function calculate() {
  // Get the value from the input field
  let multiplier = parseFloat(document.getElementById("inputPortions").value);

  // Check if the value is a negative number, zero, or greater than 30
  if (multiplier < 0 || multiplier === 0 || multiplier > 30) {
    if (multiplier > 30) {
      alert("Gib ein Zahl ZWISCHEN 1  und 30 ein!");
    } else if (multiplier === 0) {
      alert("Gib ein Zahl ZWISCHEN 1  und 30 ein");
    } else {
      alert("Die Zahl darf NICHT negativ sein!");
    }
    // Set all quantity cells to NaN
    let quantityCells = document.querySelectorAll("tbody tr td:nth-child(1)");
    quantityCells.forEach((quantityCell) => {
      quantityCell.textContent = "NaN";
    });
    return;
  }

  // Amounts and ingredients arrays
  let amounts = [250, 1, 100, 150, 1];
  let ingredients = [
    "g frische Erdbeeren",
    " EL Mandelmehl (teilentölt; à 15 g)",
    "g Skyr",
    "ml Milch (1,5 % Fett)",
    " Msp. Vanillepulver",
  ];

  // Get the table
  let table = document.getElementById("table");

  // Get the quantities column, if any
  let quantityCells = table.querySelectorAll("tbody tr td:nth-child(1)");

  // Iterate over the quantities cells and multiply each value
  quantityCells.forEach((quantityCell, index) => {
    let quantity = parseFloat(amounts[index]);
    if (!isNaN(quantity)) {
      let newQuantity = quantity * multiplier;
      // Round the new quantity to the nearest integer
      newQuantity = Math.round(newQuantity);
      quantityCell.textContent = newQuantity;

      // Replace the text in the unit cell with the ingredient
      let unitCell = quantityCell.nextElementSibling;
      if (unitCell) {
        // Remove spaces inside the ingredient
        unitCell.textContent = ingredients[index].trim();
      }
    } else {
      // The value is NaN, so show an error message and set the quantities to NaN
      alert("Die Anzahl der Portionen ist ungültig!");
      quantityCells.forEach((quantityCell) => {
        quantityCell.textContent = "NaN";
      });
    }
  });

  // Get the value of the input field
  let inputValue = document.getElementById("inputPortions").value;

  if (inputValue.trim() === "") {
    // The input field is empty
    alert("Das Feld darf NICHT leer sein");
    quantityCells.forEach((quantityCell) => {
      quantityCell.textContent = "NaN";
    });
  }
}

function foodImg() {
  showImage(currentImage);
  currentImage++;
  setTimeout(foodImg, 2000);
  if (currentImage == 5) {
    currentImage = 0;
  }
}

function showImage(currentImage) {
  document.getElementById("foodImg").src = img[currentImage];
}
