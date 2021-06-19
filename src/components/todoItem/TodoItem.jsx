import "./TodoItem.scss"

const TodoItem = () => {
  return (
    
      <div className="todo__item">
          <div className="todo__item-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eveniet porro quos inventore minus voluptatum dolor.</p>
          </div>
          <div className="todo__item-control">
            <button className="todo__item-btn todo__item-btn--edit">Edit</button>
            <button className="todo__item-btn todo__item-btn--delete">Delete</button>
          </div>
      </div>
    
  )
}

export default TodoItem
