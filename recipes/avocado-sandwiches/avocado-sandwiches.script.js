function loadStandardAmount() {
    document.getElementById('amount').value = `2`;

    multiAmount();
}

function multiAmount(){
    let myInputNumber = +document.getElementById('amount').value;

    if (myInputNumber > 30 || myInputNumber < 1 || myInputNumber == '' ) {
        alert("Bitte geben Sie eine gültige Anzahl an Portionen ein. Der Wert muss zwischen 1 und 30 liegen.");
        document.getElementById('amount').value = `2`;
    } 
    else {

    let myIngredientAmount = ['4', '2', '0.5', '4', '2', '0.5', '1', '2', '12', '3', '10', '2', '12', '12', '3', '10', '2', '12'];


    for ( let i = 0; i < myIngredientAmount.length; i++) {
        let result = myInputNumber * myIngredientAmount[i];

        document.getElementById(`ingredientAmountAndTimer${i}`).innerHTML=`${result}`;

    }
    }
    }