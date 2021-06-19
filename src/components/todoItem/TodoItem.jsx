import './todoItem.scss'

const TodoItem = (props) => {

  return (
    
      <div className="todo__item">
          <div className="todo__item-text">
            <p>{props.store.data}</p>
          </div>
          <div className="todo__item-control">
            <button className="todo__item-btn todo__item-btn--edit">Edit</button>
            <button className="todo__item-btn todo__item-btn--delete" onClick={()=>{props.deleteTask(props.store.id)}} >Delete</button>
          </div>
      </div>
    
  )
}

export default TodoItem
