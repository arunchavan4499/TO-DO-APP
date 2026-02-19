const userInput = document.getElementById('input');
const todoList = document.getElementById('todo-list');



function add() {
    if (userInput.value === '') {
        alert('plz first enter the task...');
    } else {
        let li = document.createElement('li');
        li.innerHTML = userInput.value;
        todoList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    userInput.value = '';
    saveData();
}

todoList.addEventListener("click", function (elem) {
    console.log(elem.target.tagName);
    if (elem.target.tagName === 'LI') {
        elem.target.classList.toggle("checked");
        saveData();
    }
    else if (elem.target.tagName === 'SPAN') {
        elem.target.parentElement.remove();

        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", todoList.innerHTML);
}

function showData() {
    todoList.innerHTML = localStorage.getItem("data");
}

showData();

