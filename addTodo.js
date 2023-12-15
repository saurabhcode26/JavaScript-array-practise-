function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;


    const dateInputElement = document.querySelector('js-due-date-input');
    const duedate = dateInputElement.value;






    todolist.push({
        name: name,
        duedate: duedate
    });
    console.log(todolist);


    inputElement.value = '';

    rendertodolist();
}
