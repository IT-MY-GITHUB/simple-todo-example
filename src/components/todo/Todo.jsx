import { useState } from 'react'
import TodoItem from '../todoItem/TodoItem'
import './Todo.scss'

const Todo = () => {
  const [tasks, setTask] = useState([]);
  return (
    <div>
      <div className="todo">
          <header className="todo__header">
            <h1 className="todo__title">React Todo List</h1> 
            <div className="todo__control">
              <input className="todo__input" type="text" />
              <button className="todo__add">Add</button>
            </div>
          </header>
          <section className="todo__content">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </section>
      </div>
    </div>
  )
}

export default Todo
