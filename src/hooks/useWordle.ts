import { useState } from 'react';

const useWordle = (solution: string) => {
    const [turn, setTurn] = useState<number>(0);
    const [currentGuess, setCurrentGuess] = useState<string>('');
    const [guesses, setGuesses] = useState<string[]>([]);
    const [history, setHistory] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
 
    const formatGuess = () => {

    }

    const addNewGuess = () => {

    }

    const handleKeyup = ({ key }: {key: string}) => {
        if (key === 'Enter') {
            if (turn > 5 || history.includes(currentGuess) || currentGuess.length !== 5) {
                return;
            }
        }

        if (key === 'Backspace') {
            setCurrentGuess(prevGuess => prevGuess.slice(0, -1));
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess(prevGuess => prevGuess + key);
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle