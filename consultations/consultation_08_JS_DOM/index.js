const TODO_LIST_FORM = document.querySelector(".todo_list_form");
const TODO_ORDER_LIST = document.querySelector(".todo_order_list");

TODO_LIST_FORM.addEventListener("submit", (event) => {
  event.preventDefault();

  const TODO_ORDER_LIST_ELEMENTS =
    document.querySelectorAll(".new_task_element");

  if (TODO_ORDER_LIST_ELEMENTS.length < 10) {
    const new_task = event.target.new_task.value;

    if (new_task !== "") {
      let newTaskElement = document.createElement("li");
      newTaskElement.className = "new_task_element";
      newTaskElement.textContent = new_task;
      newTaskElement.addEventListener("click", () => {
        newTaskElement.remove();
      });

      TODO_ORDER_LIST.append(newTaskElement);

    } else {
      alert("The task is empty!");
    }
  } else {
    alert("You can only 10 items enter");
  }
});
