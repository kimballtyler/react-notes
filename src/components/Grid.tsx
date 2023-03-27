import React from 'react'
import Row from './Row';
import { FormattedGuess } from '../hooks/useWordle';

type GridProps = {
  currentGuess: string;
  guesses: FormattedGuess[][];
  turn: number;
} 

export default function Grid({ currentGuess, guesses, turn }: GridProps) {
  return (
    <div>
      {guesses.map((guess, i) => {
        if (turn === i) {
          return <Row currentGuess={currentGuess} key={i} />
        }
        return <Row guess={guess} key={i} />
      })}
    </div>
  )
}
