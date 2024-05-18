let extractText = () => {
    let fileInput = document.getElementById("imageInput");
    let outputDiv = document.getElementById("output");

    let imagesFile = fileInput.files[0];

    if(!imagesFile){
        outputDiv.textContent = "Please select an image file..!!";
        return;
    }

    Tesseract.recognize(
        imagesFile,
        "eng"
    ).then( ({data}) => {
        outputDiv.textContent = data.text;
    }).catch( (error) => {
        console.error("Error", error);
        outputDiv.textContent = "Error";
    })

}





