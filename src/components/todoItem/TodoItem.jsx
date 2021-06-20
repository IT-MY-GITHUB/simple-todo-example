import Modal from '../modal/Modal'
import './todoItem.scss'

const TodoItem = (props) => {

  // const showModal = () => {
  //   return <Modal/>
  // }


  return (
    <>
      <div className="todo__item">
          <div className="todo__item-text">
            <p>{props.store.data}</p>
          </div>
          <div className="todo__item-control">
            <button className="todo__item-btn todo__item-btn--edit">Edit</button>
            <button className="todo__item-btn todo__item-btn--delete" onClick={()=>{props.deleteTask(props.store.id)}} >Delete</button>
          </div>
        <Modal/>
      </div>
    </>
  )
}

export default TodoItem
