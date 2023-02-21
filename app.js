const form = document.querySelector("#todo-form")
const todoInput = document.querySelector("#email")
const cardBody = document.querySelector(".card-body")
const danger = document.getElementById("danger")

eventListeners()

function eventListeners(){
    form.addEventListener("submit", addTodo)
}
function addTodo(e){
    const newTodo = todoInput.value.trim()
    const atpos = newTodo.indexOf("@");
    const dotpos = newTodo.lastIndexOf(".");
    if ( atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length ){
        showAlert("danger","Lütfen geçerli bir e-posta girin...")
    }
    else {
        addTodoToUI(newTodo)
    }
    e.preventDefault()
}
function showAlert(type, message){
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`
    alert.textContent = message    
    danger.appendChild(alert)   
    window.setTimeout(function(){       // bu kısım yazılmazsa uyarı sabit kalır
        alert.remove()
    },1000)
}


if (document.getElementById) {
    document.write('<style>.texter {display:none} </style>')
}

let divNum = new Array("a1", "a2", "a3");

function openClose(theID) {
    for (let i = 0; i < divNum.length; i++) {
        if (divNum[i] == theID) {
            if (document.getElementById(divNum[i]).style.display == "block") { document.getElementById(divNum[i]).style.display = "none" }
            else {
                document.getElementById(divNum[i]).style.display = "block"
            }
        } else {
            document.getElementById(divNum[i]).style.display = "none";
        }
        
    }
}
