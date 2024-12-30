function dark_enable() {
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("body").classList.toggle("light");
    if (document.querySelector("body").classList.contains("dark")) {
        document.querySelector("#dark").innerHTML = "Switch to Light Mode";
        document.querySelector("#todo_desc_input").style.color = "white";
    }
    else {
        document.querySelector("#dark").innerHTML = "Switch to Dark Mode";
        document.querySelector("#todo_desc_input").style.color = "black";
    }
}

function create_todo() {
    if (document.getElementById("todo_desc_input").value != "") {
        let todo_p = document.createElement("p");
        todo_p.innerText = document.getElementById("todo_desc_input").value;
        let todo_b = document.createElement("button");
        todo_b.setAttribute("onclick", "delete_todo(this.parentNode.id)");
        todo_b.innerText = "Delete";
        let todo = document.createElement("li");
        todo.append(todo_p);
        todo.append(todo_b);
        document.querySelector("ul").append(todo);
        localStorage.setItem(localStorage.length + 1, document.getElementById("todo_desc_input").value);
        todo.setAttribute("id", localStorage.length);
        document.getElementById("todo_desc_input").value = "";
    }
    else {
        document.getElementById("todo_desc_input").placeholder = "Please enter some description"
    }
}

function insert_todo(todo_index) {
    let todo_p = document.createElement("p");
    todo_p.innerText = localStorage.getItem(todo_index);
    let todo_b = document.createElement("button");
    todo_b.setAttribute("onclick", `delete_todo(${todo_index})`);
    todo_b.innerText = "Delete";
    let todo = document.createElement("li");
    todo.setAttribute("id", todo_index);
    todo.append(todo_p);
    todo.append(todo_b);
    document.querySelector("ul").append(todo);
}

function delete_todo(button_id) {
    document.getElementById(button_id).remove();
    localStorage.removeItem(button_id);
}

if (localStorage.length > 0) {
    for (let k = 0; k < localStorage.length; k++) {
        insert_todo(localStorage.key(k));
    }
}