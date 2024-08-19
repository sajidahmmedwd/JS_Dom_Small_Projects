let usename = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");
let form = document.querySelector("#form");



//Show input error messages
let showError = (input, message) => {
    const formControl = input.parentElement
    formControl.className = "form_control error";
    const span = formControl.querySelector("span");
    span.innerHTML = message;
}



//show success colour
let showSuccess = (input) => {
    const formControl = input.parentElement
    formControl.className = "form_control success";
}



//check email is valid
let checkMail = (input) => {
    const reEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(reEx.test(input.value.trim())){
        showSuccess(input)
    }
    else{
        showError(input, "Email is not valid")
    }
}



//check input Length
let checkInputLength = (input, min, max) =>{
    if(input.value.length < min){
        showError(input, `${getFildName(input)} You must be at least ${min} characters`);
    }
    else if(input.value.length > max){
        showError(input, `${getFildName(input)} You must be less then ${max} characters`);
    }
    else{
        showSuccess(input);
    }
}



//get FieldName
let getFildName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}




// check passwords match
let checkPassMatch = (input1, input2) => {
    if(input1.value !== input2.value){
        showError(input2, "Password do not match")
    }
}




//Event Listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputLength(usename, 3, 20);
    checkInputLength(password, 6, 30);
    checkMail(email);
    checkPassMatch(password, password2);

})

