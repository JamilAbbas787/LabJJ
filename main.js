var totalAmount = 0;

function buttonIncrease(){
    totalAmount++
    console.log(+1);
}

function buttonDecrease(){
    totalAmount--;
    console.log(-1);
}

function done(){
    if(totalAmount >= 0)
        alert("You have selected " + totalAmount + " ton(s) of cheese.");
    else if (totalAmount < 0)
        alert("You have selected a negative amount of cheese");
}
