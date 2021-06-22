import useTodos from '../../hooks/useTodos';
import Modal from '../modal/Modal';
import './TodoItem.scss';

const TodoItem = ({store,handleTask}) => {


  // const showModal = () => {
  //   return <Modal/>
  // }

  return (
    <>
    {
      store.map(task => (
        <div key={task.id} className="todo__item">
            <div className="todo__item-text">
              <p>{task.data}</p>
            </div>
            <div className="todo__item-control">
              <button className="todo__item-btn todo__item-btn--edit">Edit</button>
              <button className="todo__item-btn todo__item-btn--delete" onClick={()=>{handleTask.deleteTask(task.id)}} >Delete</button>
            </div>
          <Modal/>
        </div>
      ))
    }
      
    </>
  )
}

export default TodoItem
