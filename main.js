const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (!inputBox.value) {
        alert("You must write something!");
    } else {
        const li = document.createElement("LI");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = "";
        const span = document.createElement("span");
        span.innerText = "x";
        li.appendChild(span);
    }
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") e.target.className = "checked";
    if (e.target.tagName === "SPAN") e.target.parentElement.remove();
}, false);