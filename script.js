
//Plus button Event Lisener

var plusButton = document.getElementById("plus-button");

plusButton.addEventListener('click',function(){

    itemsNumberIncrease("item-number");
    totalItemsAmount("price","item-number")
    
})

//Minus button Event Lisener

var minusButton = document.getElementById("minus-button");

minusButton.addEventListener('click',function(){

    var itemNumber = document.getElementById("item-number").value;

    var itemsNumber = parseFloat(itemNumber); 

    if(itemsNumber==0){
        alert("Item quantity is already 0 ")
    }
    else if(itemsNumber>0) {
        itemsNumberDecrease("item-number");
    }
    else{
        alert("You Have Enter Wrong Quantity");     
    }  
    
    totalItemsAmount("price","item-number")
})


//Function for increasing item number

function itemsNumberIncrease(id){

    var itemNumber = document.getElementById(id).value;

    var itemsNumber = parseFloat(itemNumber);

    document.getElementById(id).value = itemsNumber+1;
}

//Function for Decreasing item number

function itemsNumberDecrease(id){

    var itemNumber = document.getElementById(id).value;

    var itemsNumber = parseFloat(itemNumber);

    document.getElementById(id).value = itemsNumber-1;
}

//Function for item numbers with total value per product increase

function totalItemsAmount(id,itemNumberId){

    var itemNumber = document.getElementById(itemNumberId).value;

    var itemsNumber = parseFloat(itemNumber);

    var price = document.getElementById(id).innerText;

    var priceAmount = parseFloat(price);
    var basePrice = itemsNumber * 1219 ;

    document.getElementById(id).innerText = basePrice;
}


//Plus button Event Lisener 2

var plusButton2 = document.getElementById("plus-button2");

plusButton2.addEventListener('click',function(){

    itemsNumberIncrease("item-number2");
    totalItemsAmount("price2","item-number2")
    
})

//Minus button Event Lisener 2

var minusButton2 = document.getElementById("minus-button2");

minusButton2.addEventListener('click',function(){

    var itemNumber = document.getElementById("item-number2").value;

    var itemsNumber = parseFloat(itemNumber); 

    if(itemsNumber==0){
        alert("Item quantity is already 0 ")
    }
    else if(itemsNumber>0) {
        itemsNumberDecrease("item-number2");
    }
    else{
        alert("You Have Enter Wrong Quantity");     
    }  
    
    totalItemsAmount("price2","item-number2")
})







