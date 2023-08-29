
// Adding a todo item on form submission



const handleSubmit = (event) => {
    event.preventDefault();
    const newToDo = event.target["new-todo"].value;
    console.log(newToDo);
    const newListItem = document.createElement('li');
    newListItem.innerText = newToDo;
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener('click', handleDelete);

   
    const list = document.querySelector('#list');
    list.appendChild(newListItem);
    list.appendChild(deleteButton);

}

const toDoForm = document.querySelector('#todo-form');
console.log(toDoForm);

toDoForm.addEventListener('submit', handleSubmit);

const handleDelete = (event) => {
    // const itemToDelete = event.target[list].value;
    // itemToDelete.remove(list);
    const list = document.querySelector('#list');
    list.removeChild(list.firstChild);
}





