import { useState } from 'react'
import './App.css'
import llama from "./assets/llama.jpg"
import alp from "./assets/alpaca.png"
import Animal from './Animal'

function App() {
  const [species, setSpecies] = useState(llama)

  return (
    <>
      <div>
        <Animal url={species} />
      </div>
      <div className='btn--styles'>
        <button onClick={() => {console.log('click llama'); setSpecies(llama);
        }}>Llama
        </button>
        <button onClick={() => {console.log('click alpaca'); setSpecies(alp);
        }}>Alpaca
        </button>
      </div>
    </>
  )
}

export default App
