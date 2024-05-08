let passwordGenerator = () => {
    
    let passLength = document.getElementById("passwordLength").value;
    let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+|[]{};:/?.>"

    let randomPass = "";

    for (let i = 0; i < passLength; i++){
        let randomIndex = Math.round(Math.random() * charSet.length);
        let randomChar = charSet[randomIndex];
        randomPass += randomChar
    }

    document.getElementById("showPass").innerText = randomPass;


}