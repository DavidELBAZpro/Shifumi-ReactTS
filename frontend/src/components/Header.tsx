import React from "react"

type HeaderProps = {
  score: number
}

export const Header : React.FC<HeaderProps>  = ({ score }) =>  {
  return (
    <div className="header">
      <div className="text">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors (Shifumi)</span>
      </div>
      <div className="score-box">
        <span>Score</span>
        <div className="score-box__score">{score}</div>
      </div>
    </div>
  )
}

