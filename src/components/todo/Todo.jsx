import { useState } from 'react'
import TodoItem from '../todoItem/TodoItem'
//import './todo.scss'

const Todo = () => {
  const [tasks, setTask] = useState([]);

  const [input, setinput] = useState(null);

  const addTask = (event) =>{
    event.preventDefault()
    const value = input.target.value
    setTask(prevTasks => [...prevTasks, {id: Date.now(), data: value}])
  }
  const deleteTask = (id) => {
    setTask(prevTasks => prevTasks.filter(item => item.id !== id));
  }

  
 


// need rework
  // const editTask = (data) => {
  //   console.log(data[0], data[1]);
  //   setTask(prevTasks=> prevTasks.filter(item => {
  //     if(item.id === id) item.data = data; 
  //     return item;
  //   }))
  // }
  
  return (
    <div>
      <div className="todo">
          <header className="todo__header">
            <h1 className="todo__title">React Todo List</h1> 
            <div className="todo__control">
              <form onSubmit={addTask}>
                <input className="todo__input" onChange={setinput} type="text"/>
                <button className="todo__add">Add</button>
              </form>
              
            </div>
          </header>
          <section className="todo__content">
            {tasks.length === 0
             ? <h2 className="no-tasks">Add New Task</h2> 
             : <TodoItem deleteTask={deleteTask} store={tasks}/>
            }
          </section>
      </div>
    </div>
  )
}

export default Todo
