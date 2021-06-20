import './todoItem.scss'

const TodoItem = (props) => {
//get modal input value

  function modalInput() {
    let id = showModal();
    return [document.querySelector('.modal__input').value, id];
  }

  // show modal window and send to parent task id
  function showModal () {
    (function() {
      document.querySelector('.modal')
      .classList
      .toggle('modal--show');
    })()
    return props.store.id
  }



  return (
    <>
      <div className="todo__item">
          <div className="todo__item-text">
            <p>{props.store.data}</p>
          </div>
          <div className="todo__item-control">
            <button className="todo__item-btn todo__item-btn--edit" onClick={showModal} >Edit</button>
            <button className="todo__item-btn todo__item-btn--delete" onClick={()=>{props.deleteTask(props.store.id)}} >Delete</button>
          </div>
          <div className="modal">
            <div className="modal__wrapper">
              <textarea className="modal__input" type="text" placeholder="Input new description" />
              <div className="modal__controls">
                <button className="modal__btn modal__btn--ok" onClick={()=>{props.editTask(modalInput())}} >Ok</button>
                <button className="modal__btn modal__btn--cancel" onClick={showModal}>Cancel</button>
              </div>
            </div> 
          </div>
      </div>
    </>
  )
}

export default TodoItem
