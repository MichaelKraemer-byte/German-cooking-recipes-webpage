function loadStandardAmount() {
    document.getElementById('amount').value = `8`;

    multiAmount();
}

function multiAmount(){
    
    let myInputNumber = +document.getElementById('amount').value;

    if (myInputNumber > 30 || myInputNumber < 1 || myInputNumber == '' ) {
        alert("Bitte geben Sie eine gültige Anzahl an Portionen ein. Der Wert muss zwischen 1 und 30 liegen.");
        document.getElementById('amount').value = `8`;
    } 
    else {

    let myIngredientNumber1 = 62.5;
    let result1 = myInputNumber * myIngredientNumber1;

    let myIngredientNumber2 = 6.3;
    let result2 = myInputNumber * myIngredientNumber2;

    let myIngredientNumber3 = 0.9;
    let result3 = myInputNumber * myIngredientNumber3;

    let myIngredientNumber4 = 0.1;
    let result4 = myInputNumber * myIngredientNumber4;

    let myIngredientNumber5 = 12.5;
    let result5 = myInputNumber * myIngredientNumber5;

    let myIngredientNumber6 = 22.5;
    let result6 = myInputNumber * myIngredientNumber6;

    let myIngredientNumber7 = 31.3;
    let result7 = myInputNumber * myIngredientNumber7;

    let myIngredientNumber8 = 0.1;
    let result8 = myInputNumber * myIngredientNumber8;

    let myIngredientNumber9 = 0.3;
    let result9 = myInputNumber * myIngredientNumber9;

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


    let n2 = result2.toFixed(1);
    document.getElementById('ingredient2').innerHTML= n2;

    let n3 = result3.toFixed(1);
    document.getElementById('ingredient3').innerHTML= n3;

    let n4 = result4.toFixed(1);
    document.getElementById('ingredient4').innerHTML= n4;

    let n5 = result5.toFixed(1);
    document.getElementById('ingredient5').innerHTML= n5;

    let n6 = result6.toFixed(1);
    document.getElementById('ingredient6').innerHTML= n6;

    let n7 = result7.toFixed(1);
    document.getElementById('ingredient7').innerHTML= n7;

    let n8 = result8.toFixed(1);
    document.getElementById('ingredient8').innerHTML= n8;

    let n9 = result9.toFixed(1);
    document.getElementById('ingredient9').innerHTML= n9;

    }
}
