document
  .querySelector('#addTask')
  .addEventListener('click', addTask)


document
  .querySelector('#clearTasks')
  .addEventListener('click', clearTasks)



function addTask() {

  const task =
    document.querySelector('#taskInput').value


  if (task === '') {
    return
  }


  const listItem =
    document.createElement('li')


  const taskText =
    document.createElement('span')


  const completeButton =
    document.createElement('button')


  const deleteButton =
    document.createElement('button')


  taskText.innerText =
    task


  completeButton.innerText =
    'Done'


  deleteButton.innerText =
    'Delete'


  completeButton
    .addEventListener(
      'click',
      completeTask
    )


  deleteButton
    .addEventListener(
      'click',
      deleteTask
    )


  listItem.appendChild(taskText)

  listItem.appendChild(completeButton)

  listItem.appendChild(deleteButton)


  document
    .querySelector('#taskList')
    .appendChild(listItem)


  document.querySelector('#taskInput').value =
    ''



  function completeTask() {

    taskText.classList.toggle('completed')

  }



  function deleteTask() {

    listItem.remove()

  }

}



function clearTasks() {

  document.querySelector('#taskList').innerHTML =
    ''

}