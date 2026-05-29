let result = document.getElementById("result");

let buttons = document.querySelectorAll("button");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        let value = button.getAttribute("data-value");

        if(value){

            result.value += value;

        }

    });

});

document.getElementById("clear").addEventListener("click", function(){

    result.value = "";

});

document.getElementById("equal").addEventListener("click", function(){

    try{

        result.value = eval(result.value);

    }

    catch{

        result.value = "Error";

    }

});