import { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Wordle from './components/Wordle';

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5174/solutions')
      .then(res => res.json())
      .then(json => {
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      })
  }, [setSolution])

  return (
    <div className='App'>
        <h1>Wordle</h1>
        {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App