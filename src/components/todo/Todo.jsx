import { useState } from 'react'
import TodoItem from '../todoItem/TodoItem'
import './todo.scss'

const Todo = () => {
  const [tasks, setTask] = useState([]);
  const [id, setId] = useState(0);

  const addTask = async () => {
    let inputText = document.querySelector('[data-input]');
    await setTask(prevTasks => [...prevTasks, {id: id, data: inputText.value}]);
    setId(prevId => prevId + 1);
    inputText.value = '';
  }

  const deleteTask = (id) => {
    setTask(prevTasks => prevTasks.filter(item => item.id !== id));
  }
  
  return (
    <div>
      <div className="todo">
          <header className="todo__header">
            <h1 className="todo__title">React Todo List</h1> 
            <div className="todo__control">
              <input className="todo__input" type="text" data-input/>
              <button onClick={addTask} className="todo__add">Add</button>
            </div>
          </header>
          <section className="todo__content">
            {tasks.length === 0 ? <h2 className="no-tasks">Add New Task</h2> : tasks.map(task => (
              <TodoItem deleteTask={deleteTask} key = {task.id} store={task}/>
            ))}
          </section>
      </div>
    </div>
  )
}

export default Todo
