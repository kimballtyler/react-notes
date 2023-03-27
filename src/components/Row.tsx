import React from 'react'
import { FormattedGuess } from '../hooks/useWordle'

type RowProps = {
  guess?: FormattedGuess[];
  currentGuess?: string|undefined;
}

export default function Row({ guess, currentGuess }: RowProps) {

  if (guess) {
    return (
      <div className='row past'>
        {guess.map((letter, i) => (
          <div key={i} className={letter.color}>{letter.key}</div>
        ))}
      </div>
    )
  }

  if (currentGuess) {
    const letters = [...currentGuess];
    return (
      <div className='row current'>
        {letters.map((letter, i) => (
          <div className='filled' key={i}>{letter}</div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    )
  }

  return (
    <div className='row'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
