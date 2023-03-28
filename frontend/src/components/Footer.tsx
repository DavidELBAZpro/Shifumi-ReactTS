import React, { useState } from "react"
import {Modal} from "./Modal"

export const Footer : React.FC = () => {
  const [modal, setModal] = useState<boolean>(false)

  const toggle = () => {
    setModal(!modal)
  }

  return (
    <>
      <footer className="footer">
        <div className="attribution">BY : 
          <div></div>
          <a href="https://davidelbazdev.surge.sh/" target="_blank">
            David ELBAZ
          </a>
        </div>
        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  )
}


