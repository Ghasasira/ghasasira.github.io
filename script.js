"use strict";

//function subtotal(event) {


var x = document.getElementById("form");
x.addEventListener("submit", function(event) {
    event.preventDefault();
    let transport = 0,
        trans = 0,
        check = document.getElementById("adds"),
        radButton = document.getElementById("form").rad,
        chosen;

    for (let i = 0; i < radButton.length; i++) {

        if (radButton[i].checked == true) {
            chosen = radButton[i].value;
        }
        if (chosen == "del") {
            transport = 5000;

        }
        if (chosen == "pic") {
            transport = 2500;

        }

    }


    let nMango = parseInt(document.getElementById("mango").value, 10) || 0;
    let nApple = parseInt(document.getElementById("apple").value, 10) || 0;
    let nOrange = parseInt(document.getElementById("orange").value, 10) || 0;
    let items = (nApple + nMango + nOrange);
    let subTotal = ((nMango * 1200) + (nApple * 2000) + (nOrange * 1500));
    let total = (subTotal + transport);

    document.getElementById("sum").value = subTotal;
    document.getElementById("cart").value = items;
    //document.getElementById("totalpay").value = total;

    document.getElementById("lastlast").innerHTML = "Total Number of friuts ordered: " + items + " <br>";
    document.getElementById("lastlast").innerHTML += "Total transport fee: " + transport + "<br>";
    document.getElementById("lastlast").innerHTML += "Subtotal: " + subTotal + " <br>";
    document.getElementById("lastlast").innerHTML += "Total pay with all costs included: " + total + "";
});