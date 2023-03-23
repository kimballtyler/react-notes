import { useState } from 'react';

type FormattedGuess = {
    key: string;
    color: string;
}

const useWordle = (solution: string) => {
    const [turn, setTurn] = useState<number>(0);
    const [currentGuess, setCurrentGuess] = useState<string>('');
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
 
    const formatGuess = () => {
        const solutionArr: (string|null)[] = [...solution];
        const formattedGuess = [...currentGuess].map((letter) => {
            return {key: letter, color: 'grey'}
        });

        formattedGuess.forEach((letter, i) => {
            if (solutionArr[i] === letter.key) {
                formattedGuess[i].color = 'green';
                solutionArr[i] = null;
            }
        });

        formattedGuess.forEach((letter, i) => {
            if (solutionArr.includes(letter.key) && letter.color !== 'green') {
                formattedGuess[i].color = 'yellow';
                solutionArr[solutionArr.indexOf(letter.key)] = null;
            }
        });

        addNewGuess(formattedGuess);
    }

    const addNewGuess = (formattedGuess: FormattedGuess[]) => {
        if (currentGuess === solution) {
            setIsCorrect(true);
        }

        setGuesses((prevGuesses) => {
            const newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        })

        setHistory(prevHistory => [...prevHistory, currentGuess]);

        setTurn(prevTurn => prevTurn + 1);

        setCurrentGuess(''); 
    }

    const handleKeyup = ({ key }: {key: string}) => {
        if (key === 'Enter') {
            if (turn > 5 || history.includes(currentGuess) || currentGuess.length !== 5) {
                return;
            }

            formatGuess();
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