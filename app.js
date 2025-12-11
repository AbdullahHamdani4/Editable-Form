let logemail = document.getElementById("logemail");
let logpass = document.getElementById("logpass");
let table = document.querySelector("table");
let tablee = document.querySelector("input");

//Problem 3
function addData(e) {
    e.preventDefault()
    let newTableData = table.innerHTML + `
    <tr>
                <td>${logemail.value}</td>
                <td>${logpass.value}</td>
                <td><button onclick="deleteData(this)" class="buttonTd">Delete</button></td>
                <td><button onclick="editData(this)" class="buttonTd">Edit</button></td>
            </tr>
    `
    table.innerHTML = newTableData
    logemail.value = ""
    logpass.value = ""
}
function deleteData(button) {
    button.parentElement.parentElement.remove()
}
// console.log(object);
function editData(button) {
    logemail.value = button.parentElement.parentElement.childNodes[1].innerText
    logpass.value = button.parentElement.parentElement.childNodes[3].innerText
     button.parentElement.parentElement.remove()
    
}