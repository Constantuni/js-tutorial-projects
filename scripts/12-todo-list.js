const todoArray = [{
    name: 'drink water',
    dueDate: '2025-05-25'
  },{
    name: 'learn Japanese',
    dueDate: '2026-06-26'
  }
];

renderTodoList();

function renderTodoList(){
  let todoHTML = '';
  todoArray.forEach((todoObject, index) => {
    //const todoName = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="js-delete-button delete-button">Delete</button>
    `;
    todoHTML += html;
  });

  document.querySelector('.js-todo-div').innerHTML = todoHTML;
  document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoArray.splice(index, 1);
      renderTodoList();
    });
  });
}

document.querySelector('.js-add-button').addEventListener('click', () => {
  addTodo();
});


function addTodo(){
  const nameElement = document.querySelector('.js-todo-input');
  const name = nameElement.value;

  const dateElement = document.querySelector('.js-due-date-input');
  const dueDate = dateElement.value;

  todoArray.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });
  nameElement.value = '';
  dateElement.value = '';

  renderTodoList();
}