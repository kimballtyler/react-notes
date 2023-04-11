import React, { useEffect, useState } from 'react'

type Letters = [
    {
        key: string;
    }
]

export default function Keypad({ usedKeys }: any) {
    const [letters, setLetters] = useState<Letters|null>(null);

    useEffect(() => {
        fetch('http://localhost:5174/letters')
            .then(res => res.json())
            .then(json => {
                setLetters(json);
            })
    }, [])

  return (
    <div className='keypad'>
        {letters && letters.map(letter => {
            const color = usedKeys[letter.key]
         return (
            <div key={letter.key} className={color}>{letter.key}</div>
         )   
        })}
    </div>
  )
}
