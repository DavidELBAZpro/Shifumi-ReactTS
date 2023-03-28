import React from "react"
import ReactDOM from "react-dom"
const rules = require("../images/image-rules.svg") as string
const close = require("../images/icon-close.svg") as string

interface ModalProps {
  toggle: () => void
}

export const Modal : React.FC<ModalProps>  = ({ toggle }) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal__header">
          <h1>Rules</h1>
          <button onClick={toggle}>
            <img src={close} alt="Close"  />
          </button>
        </div>
        <img src={rules} alt="Rules"  />
      </div>
    </div>,
    document.getElementById("modal")
  )
}

