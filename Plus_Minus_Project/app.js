let counterElement = document.getElementById("counter");
let plusBtn = document.getElementById("plusBtn");
let minusBtn = document.getElementById("minusBtn");
let counter = 0;

let updateCounter = (value) => {

    // Plus Button Code

    counter = counter + value;
    counterElement.innerText = counter;

    if(counter >= 10){
        plusBtn.setAttribute("disabled", true);
    }
    else{
        plusBtn.removeAttribute("disabled", false);
    }

    // Minus Button Code

    if(counter <= 0){
        minusBtn.setAttribute("disabled", true);
    }
    else{
        minusBtn.removeAttribute("disabled", false);
    }

}

plusBtn.addEventListener("click", () =>{
    updateCounter(1);
})

minusBtn.addEventListener("click", () =>{
    updateCounter(-1);
})