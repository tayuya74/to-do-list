const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler)

function formHandler(event) {
	event.preventDefault()

	// Получаем название задачи из input
	const taskText = todoInput.value

	// Создаем тэг li через разметку
	// const li = `<li>${taskText}</li>`
	// Добавляем разметку на страницу
	// todoList.insertAdjacentHTML('beforeend', li)

	// Создаем тэг li с помощью создания элемента
	const newTask = document.createElement('li')

	// Заполняем его тектом
	newTask.innerText = taskText

 // Создаем кнопку "удалить"
	const deleteBtn = document.createElement('button')
	deleteBtn.setAttribute('role', 'button')
	deleteBtn.innerText = 'Удалить'
	deleteBtn.style['margin-left'] = '15px'
	newTask.append(deleteBtn)

	// Добавляем событие по клику на удаление
	deleteBtn.addEventListener('click', deleteTask)

	// Добавляем пример на страницу
	todoList.append(newTask)

	// Очищаем поле ввода
	todoInput.value = ''

	// Фокус на поле ввода
	todoInput.focus()
}

function deleteTask() {
 this.closest('li').remove()
}