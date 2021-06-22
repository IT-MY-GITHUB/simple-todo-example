import './Modal.scss'

const Modal = () => {
  return (
    <>
      <div className="modal">
          <div className="modal__wrapper">
            <textarea className="modal__input" type="text" ></textarea>
            <div className="modal__controls">
              <button className="modal__btn modal__btn--ok">Ok</button>
              <button className="modal__btn modal__btn--cancel">Cancel</button>
            </div>
          </div> 
      </div>
    </>
  )
}

export default Modal
