import React from 'react'

type ModalProps = {
  isCorrect: boolean;
  solution: string;
  turn: number;
}

export default function FinishModal({ isCorrect, solution, turn }: ModalProps) {
  return (
    <div className="finish-modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>You Lose!</h1>
          <p className="solution">{solution}</p>
          <p>Go read the dictionary!</p>
        </div>
      )}
    </div>
  )
}