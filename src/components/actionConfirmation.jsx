import "../styles/actionConfirm.css"

const ActionConfirmation = ({action, text, display, setDisplay}) => {
  if(!display) return null
  return (
    <div className="confirm-container">
      <div className="modal-content sub-modal">
        <p>{text}</p>
        <div className="form-menu">
          <button onClick={() => {
            action()
            setDisplay()
          }} className="confirm">confirmar</button>
          <button onClick={() => {
            setDisplay()
          }} className="cancel">Cancelar</button>
        </div>
      </div>
    </div>
  )
}

export default ActionConfirmation;