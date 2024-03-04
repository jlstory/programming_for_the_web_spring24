import './App.css'
import Gear from "./Gear"


function App() {
const gear = [
    {
      item: "Mariana Bass Synthesizer",
      brand: "./moog@0.5x.png",
      price: "$99.00",
      affordable: "yes"
    },
    {
      item: "Moog Matriarch",
      brand: "./moog@0.5x.png",
      price: "$1,999.99",
      affordable: "no"
    },
    {
      item: "AWS 948",
      brand: "./ssl@0.5x.png",
      price: "$118,244.00",
      affordable: "no"
    },
    {
      item: "Custom Shop LE Nashville Ash-V '57 Stratocaster HSS",
      brand: "./fender@0.5x.png",
      price: "$5,800.00",
      affordable: "no"

    },
    {
      item: "Matriarch Dark Semi-Modular Analog Synth",
      brand: "./moog@0.5x.png",
      price: "$1,799.00",
      affordable: "no"
    },
    {
      item: "American Ultra Jazzmaster - Cobra Blue",
      brand: "./fender@0.5x.png",
      price: "$2,249.99",
      affordable: "no"
    },
    {
      item: "G6210 Custom Shop Jr. Jet",
      brand: "./gret@0.5x.png",
      price: "$4,699.99",
      affordable: "no"
    },
    {
      item: "Limited RS124 Compressor Matched Pair",
      brand: "./chand@0.5x.png",
      price: "$6,740.00",
      affordable: "no"
    },
    {
      item: "Massive Passive Stereo EQ",
      brand: "./manley@0.5x.png",
      price: "$8,399.00",
      affordable: "no" 
    },
    {
      item: "Stage 4 88-Key Keyboard",
      brand: "./nord@0.5x.png",
      price: "$6,747.00",
      affordable: "no" 
    },
    {
      item: "HDV 820 Digital Headphone Amplifier",
      brand: "./senn@0.5x.png",
      price: "$2,499.95",
      affordable: "no"
    },
    {
      item: "HD820 Over-Ear Headphones",
      brand: "./senn@0.5x.png",
      price: "$1,999.95",
      affordable: "no" 
    },
    {
      item: "Collector's Series Purpleheart 7-Piece Drum Kit",
      brand: "./dw@0.5x.png",
      price: "$10,321.25",
      affordable: "no" 
    },
    {
      item: "Clavinova CVP-909 Digital Grand Piano",
      brand: "./yamaha@0.5x.png",
      price: "$18,499.99",
      affordable: "no" 
    },
    {
      item: "Fully Loaded Mac Pro Rack Mount with Dual Pro Studio Display XLRs",
      brand: "./mac@0.5x.png",
      price: "$26,754.00",
      affordable: "no" 
    },
  ];
  return (
    <>
    <div className="App">
      <h1>Things that I Would Like to Collect</h1>
      <h2>I will probably never collect most of them...</h2>
    
          <table className="table-style">
            <caption>My Gear List</caption>
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Price</th>
                  <th scope="col">Affordable</th>
                </tr>
              </thead>
              <tbody>
                {gear.map((gear, index) => {
                  return (
                  <Gear 
                  key={gear.item} 
                  odd={index % 2 === 0}
                  item={gear.item} 
                  brand={gear.brand} 
                  price={gear.price} 
                  affordable={gear.affordable}  
                  />
                  )
                }
              )
            }
              </tbody>
             </table> 
        </div>
    </>
  )
}

export default App;


