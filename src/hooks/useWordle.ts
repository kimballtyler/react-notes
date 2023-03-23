import { useState } from 'react';

const useWordle = (solution: string) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
 
    const formatGuess = () => {

    }

    const addNewGuess = () => {

    }

    const handleKeyup = ({ key }: {key: string}) => {
        if (key === 'Backspace') {
            setCurrentGuess(prevGuess => prevGuess.slice(0, -1))
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess(prevGuess => prevGuess + key)
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle