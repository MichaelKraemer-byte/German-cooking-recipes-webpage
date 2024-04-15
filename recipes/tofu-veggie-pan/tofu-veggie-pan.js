function loadStandardAmount() {
    document.getElementById('amount').value = `4`;

    multiAmount();
}

function multiAmount(){
    let myInputNumber = +document.getElementById('amount').value;

    if (myInputNumber > 30 || myInputNumber < 1 || myInputNumber == '' ) {
        alert("Bitte geben Sie eine gültige Anzahl an Portionen ein. Der Wert muss zwischen 1 und 30 liegen.");
        document.getElementById('amount').value = `4`;
    } 
    else {

    let myIngredientNumber1 = 50;
    let result1 = myInputNumber * myIngredientNumber1;

    let myIngredientNumber2 = 0.25;
    let result2 = myInputNumber * myIngredientNumber2;

    let myIngredientNumber3 = 0.5;
    let result3 = myInputNumber * myIngredientNumber3;

    let myIngredientNumber4 = 0.75;
    let result4 = myInputNumber * myIngredientNumber4;

    let myIngredientNumber5 = 0.25;
    let result5 = myInputNumber * myIngredientNumber5;

    let myIngredientNumber6 = 0.25;
    let result6 = myInputNumber * myIngredientNumber6;

    let myIngredientNumber7 = 0.25;
    let result7 = myInputNumber * myIngredientNumber7;

    let myIngredientNumber8 = 0.25;
    let result8 = myInputNumber * myIngredientNumber8;

    let myIngredientNumber9 = 0.25;
    let result9 = myInputNumber * myIngredientNumber9;

    let myIngredientNumber10 = 0.5;
    let result10 = myInputNumber * myIngredientNumber10;

    let myIngredientNumber11 = 0.25;
    let result11 = myInputNumber * myIngredientNumber11;

    let myIngredientNumber12 = 0.5;
    let result12 = myInputNumber * myIngredientNumber12;

    let myIngredientNumber13 = 0.5;
    let result13 = myInputNumber * myIngredientNumber13;

    let myIngredientNumber14 = 50;
    let result14 = myInputNumber * myIngredientNumber14;

    let myIngredientNumber15 = 50;
    let result15 = myInputNumber * myIngredientNumber15;

    let myIngredientNumber16 = 0.13;
    let result16 = myInputNumber * myIngredientNumber16;

    let myIngredientNumber17 = 1;
    let result17 = myInputNumber * myIngredientNumber17;

    let myIngredientNumber18 = 75;
    let result18 = myInputNumber * myIngredientNumber18;

    let myIngredientNumber19 = 0.2;
    let result19 = myInputNumber * myIngredientNumber19;


    // Zutaten-Menge
    document.getElementById('ingredient1').innerHTML=`${result1}`;
    document.getElementById('ingredient2').innerHTML=`${result2}`;
    document.getElementById('ingredient3').innerHTML=`${result3}`;
    document.getElementById('ingredient4').innerHTML=`${result4}`;
    document.getElementById('ingredient5').innerHTML=`${result5}`;
    document.getElementById('ingredient6').innerHTML=`${result6}`;
    document.getElementById('ingredient7').innerHTML=`${result7}`;
    document.getElementById('ingredient8').innerHTML=`${result8}`;
    document.getElementById('ingredient9').innerHTML=`${result9}`;
    document.getElementById('ingredient10').innerHTML=`${result10}`;
    document.getElementById('ingredient11').innerHTML=`${result11}`;
    document.getElementById('ingredient12').innerHTML=`${result12}`;
    document.getElementById('ingredient13').innerHTML=`${result13}`;
    document.getElementById('ingredient14').innerHTML=`${result14}`;
    document.getElementById('ingredient15').innerHTML=`${result15}`;
    document.getElementById('ingredient16').innerHTML=`${result16}`;
    document.getElementById('ingredient17').innerHTML=`${result17}`;
    document.getElementById('ingredient18').innerHTML=`${result18}`;
    document.getElementById('ingredient19').innerHTML=`${result19}`;

    }
}