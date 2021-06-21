import { useState } from 'react'
import useTodos from '../../hooks/useTodos';
import TodoItem from '../todoItem/TodoItem'
//import './todo.scss'

const Todo = () => {
  const {store,handlTask} = useTodos()
  
  return (
    <div>
      <div className="todo">
          <header className="todo__header">
            <h1 className="todo__title">React Todo List</h1> 
            <div className="todo__control">
              <form onSubmit={handlTask.addTask}>
                <input className="todo__input" onChange={handlTask.setinput} type="text"/>
                <button className="todo__add">Add</button>
              </form>
              
            </div>
          </header>
          <section className="todo__content">
            {store.length === 0
             ? <h2 className="no-tasks">Add New Task</h2> 
             : <TodoItem store={store} handlTask={handlTask} />
            }
          </section>
      </div>
    </div>
  )
}

export default Todo
