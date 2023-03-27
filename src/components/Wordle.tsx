import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle';
import Grid from './Grid';

type WordleProps =  {
    solution: string;
}

export default function Wordle({ solution }: WordleProps) {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    useEffect(() => {
      console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

  return (
    <>
      <div>soltion - {solution}</div>
      <div>Current Guess: {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </>
  )
}
