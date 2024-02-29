import "./index.css";
import Fact from "./compnents/Camelid.jsx";
import llamaImage from "./assets/img/llama.jpg";
import alpacaImage from "./assets/img/alpaca.png";

function App() {
    const camelids = [
      {name: "The Lamas", desc: "Llamas are very confident and brave animals.", image: <img src={llamaImage} alt="llama" />},
      {name: "The Alpacas", desc: "Alpacas are very gentle and shy.", image: <img src={alpacaImage} alt="alpaca" />}
    ]

  return (
    <>
      <div>
        <h1>Llamas vs Alpapcas</h1>
        <p>One of natural history&#39;s greatest and most brutal battles</p>
      </div>

      <article>
      <Fact 
        name={camelids[0].name} 
        desc={camelids[0].desc} 
        image={camelids[0].image} />
      </article>
        
      <article>
        <Fact 
        name={camelids[1].name} 
        desc={camelids[1].desc} 
        image={camelids[1].image} />      
      </article>
    </>
  )
}

export default App
