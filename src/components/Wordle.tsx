import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle';

type WordleProps =  {
    solution: string;
}

export default function Wordle({ solution }: WordleProps) {
    const { currentGuess, handleKeyup } = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

  return (
    <div>Current Guess: {currentGuess}</div>
  )
}
