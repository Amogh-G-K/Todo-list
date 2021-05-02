//Selectors
const ip = document.querySelector('.todo-input');
const ipbtn = document.querySelector('.todo-btn');
const list = document.querySelector('.todo-list');

//Event Listners
ipbtn.addEventListener('click',takeip);
list.addEventListener('click',adddelete);

//functions
function takeip(e) {
    e.preventDefault();

    //CHECK IF FEILD IS NOT EMPTY
    if(ip.value === "") {
        return;
    }

    //TODO div element
    const divtodo = document.createElement('div');
    divtodo.classList.add('todo')

    //todo list create
    const liele = document.createElement('li');
    liele.innerText = ip.value;
    divtodo.appendChild(liele);
    ip.value = "";

    //checked btn
    const checkbtn = document.createElement('button');
    checkbtn.innerHTML = '<i class="fas fa-check"></i>';
    checkbtn.classList.add('checkbtn');
    divtodo.appendChild(checkbtn);

    //trash btn
    const trashbtn = document.createElement('button');
    trashbtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashbtn.classList.add('trashbtn');
    divtodo.appendChild(trashbtn);

    //Appending to list
    list.appendChild(divtodo);
}

function adddelete(e) {
    //To find the target element
    const item = e.target;
    const todo = item.parentElement;
    if(item.classList[0] === 'trashbtn') {
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function() {
            todo.remove();
        }); 
    }
    if(item.classList[0] === 'checkbtn') {
        todo.classList.toggle('completed');
    }
}