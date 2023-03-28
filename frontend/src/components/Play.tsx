import React from "react"
import { Link } from "react-router-dom"
const Triangle = require("../images/bg-triangle.svg") as string


interface PlayProps {
  setMyChoice: React.Dispatch<React.SetStateAction<string>>;
}

export const Play: React.FC<PlayProps> = ({ setMyChoice }) => {
  const setChoice = (e: React.MouseEvent<HTMLDivElement>) => {
    setMyChoice(e.currentTarget.dataset.id || "");
  }

  return (
    <div className="play">
      <img src={Triangle} alt="" className="triangle" />
      <div className="items">
        <Link to="/game">
          <div
            data-id="paper"
            onClick={setChoice}
            className="icon icon--paper"
          ></div>
        </Link>
        <Link to="/game">
          <div
            data-id="scissors"
            onClick={setChoice}
            className="icon icon--scissors"
          ></div>
        </Link>
        <Link to="/game">
          <div
            data-id="rock"
            onClick={setChoice}
            className="icon icon--rock"
          ></div>
        </Link>
      </div>
    </div>
  )
}
