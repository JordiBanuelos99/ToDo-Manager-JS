//Global variables
let newTask = document.getElementById("txtTask"); //Travel the DOM once
let count = 0;

function registerTask(){
    console.log(newTask.value);
    let tmp=`<li id="${count}" class="task">${newTask.value} <button onclick="deleteTask(${count})"><i class="fa-solid fa-trash"></i></button> </li>`;
    document.getElementById("todoList").innerHTML+=tmp;
    clearForm();
    count = count + 1;
}
function deleteTask(x){
    document.getElementById(x).remove();
}
function clearForm(){
    newTask.value="";
}