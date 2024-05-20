let addTask = () => {
    let taskInput = document.getElementById("taskInput");
    let taskInputValue = taskInput.value.trim();

    if(taskInputValue !== ""){
        let taskListUl = document.getElementById("taskList");
        let li = document.createElement("li");
        li.innerHTML = '<input type="checkbox">' + taskInputValue + '<button onclick="deleteTask(this)">Delete</button>';
        taskListUl.appendChild(li);
        taskInput.value = "";
    }
    else{
        alert("Please Add a Task.!!");
    };

}

const deleteTask = (btn) => {
    const li = btn.parentNode;
   li.parentNode.removeChild(li);
};

let deleteTaskChecked = () => {
    let taskList = document.getElementById("taskList");
    let checkboxes = document.querySelectorAll('input[type = "checkbox"]:checked');

    checkboxes.forEach(checkbox => {
       let li = checkbox.parentNode;
       li.parentNode.removeChild(li);
    })

}