let notesContainer = document.querySelector(".notes_container");
let btn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input_box");

btn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input_box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/delete_icon.png";
    notesContainer.appendChild(inputBox).appendChild(img);

})

notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
} )

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})