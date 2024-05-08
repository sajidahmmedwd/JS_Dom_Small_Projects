let colorGenerator = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
};

let updateColor = () => {
    let color = colorGenerator();
    let colorBox = document.getElementById("colorBox");
    let colorCode = document.getElementById("colorCode");

    colorBox.style.backgroundColor = color;
    colorCode.innerText = color;
};

let copyColorCode = () => {
    let colorCode = document.getElementById("colorCode");
    let inputTag = document.createElement("input");
    document.body.appendChild(inputTag);
    inputTag.value = colorCode.innerText;

    inputTag.select();
    document.execCommand("copy");
    document.body.removeChild(inputTag);
    alert("RGB Color Copied to Clipbord..!");
};

    document.getElementById("copyCode").addEventListener("click", () => {
        copyColorCode();
    });

function generateColrBtn(){
    updateColor();
};
