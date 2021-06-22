import useTodos from '../../hooks/useTodos'
import TodoItem from '../todoItem/TodoItem'
import './Todo.scss'

const Todo = () => {

  const {store, handleTask: handleTask} = useTodos();

  return (
    <div>
      <div className="todo">
          <header className="todo__header">
            <h1 className="todo__title">React Todo List</h1> 
            <div className="todo__control">
              <form className="todo__form" onSubmit={handleTask.addTask}>
                <input className="todo__input" onChange={handleTask.setInput} type="text"/>
                <button className="todo__add">Add</button>
              </form>
            </div>
          </header>
          <section className="todo__content">
            {store.length === 0
             ? <h2 className="no-tasks">Add New Task</h2> 
             : <TodoItem store={store} handleTask={handleTask} />
            }
          </section>
      </div>
   </div>
  )
}

export default Todo
