const TODO_LIST_FORM = document.querySelector(".todo_list_form");

TODO_LIST_FORM.addEventListener("submit", (event) => {
    event.preventDefault();

    const new_task = event.target.new_task.value;
});