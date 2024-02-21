import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const greeting = 'Hello, World! 👋'
  const goodbye = '🌍 Goodbye, World 🌍'
  const happy = true
  return (
    <>
      <div className="header">
        <h1>{greeting}<br/>This is Josh&#39;s first attempt at using React...</h1>
        <h2>Am I happy?</h2>
        {happy ? ('If you can see this then I am happy enough for now.') : ('If you cannot see this, I am not all that happy right now.')}
        
        </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            Hours spent on this short and simple web app... (JUST KEEP CLICKING!) {count}
        </button>
      </div>
    <div>
      <h2>{goodbye}</h2>
    </div>
    </>
  )
}

export default App
