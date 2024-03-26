import { useState } from 'react'
import './App.css';
import Masthead from './Masthead/Masthead';
import { GearForm } from './GearForm/GearForm';
import ItemCard from './ItemCard/ItemCard';
import {nanoid} from "nanoid";
import clsx from "clsx";


function App() {
const [gear, setGear] = useState([
    {
      item: "Mariana Bass Synthesizer",
      brand: "./moog.png",
      price: "$99.00",
      affordable: true,
      id: "1"    },
    {
      item: "Moog Matriarch",
      brand: "./moog.png",
      price: "$1,999.99",
      affordable: false,
      id: "2"    },
    {
      item: "AWS 948",
      brand: "./ssl.png",
      price: "$118,244.00",
      affordable: false,
      id: "3"    },
    {
      item: "Custom Shop LE Nashville Ash-V '57 Stratocaster HSS",
      brand: "./fender.png",
      price: "$5,800.00",
      affordable: false,
      id: "4"
    },
    {
      item: "Matriarch Dark Semi-Modular Analog Synth",
      brand: "./moog.png",
      price: "$1,799.00",
      affordable: false,
      id: "5"    },
    {
      item: "American Ultra Jazzmaster - Cobra Blue",
      brand: "./fender.png",
      price: "$2,249.99",
      affordable: false,
      id: "6"    },
    {
      item: "G6210 Custom Shop Jr. Jet",
      brand: "./gret.png",
      price: "$4,699.99",
      affordable: false,
      id: "7"    },
    {
      item: "Limited RS124 Compressor Matched Pair",
      brand: "./chand.png",
      price: "$6,740.00",
      affordable: false,
      id: "8"    },
    {
      item: "Massive Passive Stereo EQ",
      brand: "./manley.png",
      price: "$8,399.00",
      affordable: false,
      id: "9"
    },
    {
      item: "Stage 4 88-Key Keyboard",
      brand: "./nord.png",
      price: "$6,747.00",
      affordable: false,
      id: "10" 
    },
    {
      item: "HDV 820 Digital Headphone Amplifier",
      brand: "./senn.png",
      price: "$2,499.95",
      affordable: false,
      id: "11"
    },
    {
      item: "HD820 Over-Ear Headphones",
      brand: "./senn.png",
      price: "$1,999.95",
      affordable: false,
      id: "12" 
    },
    {
      item: "Collector's Series Purpleheart 7-Piece Drum Kit",
      brand: "./dw.png",
      price: "$10,321.25",
      affordable: false,
      id: "13" 
    },
    {
      item: "Clavinova CVP-909 Digital Grand Piano",
      brand: "./yamaha.png",
      price: "$18,499.99",
      affordable: false,
      id: "14" 
    },
    {
      item: "Fully Loaded Mac Pro Rack Mount w/ 2X Pro Studio Display XLRs",
      brand: "./mac.png",
      price: "$26,754.00",
      affordable: false,
      id: "15" 
    },
  ]);
function deleteCard(id) {
  console.log("delete me", id);
  const updatedArray = gear.filter((gearList) => {
    return gearList.id !== id; // will skip item with matching id
  })
  setGear(updatedArray)
}
function duplicateCard(id) {
  console.log("duplicate me", id)
  const matchingGear = gear.find((gearList) => {
    return gearList.id === id
  });
  const updatedGear = {...matchingGear, id: nanoid()}
  setGear([...gear, updatedGear]);
}
function addCard(newCard) {
  const cardWidthId = {
    ...newCard,
    id: nanoid()
  }
  setGear([...gear,cardWidthId])
 }


  return (
    <div className="page">
        {/* {mastHead goes here} */}
      <Masthead />
      <div className="collection">
        {/* {gear map goes here} */}
        {/* {use ItemCard component in loop} */}
        {gear.map((gearList) => {
          return (
            <ItemCard 
              key={gearList.id} 
              deleteFn={deleteCard}
              duplicateFn={duplicateCard}
              {...gearList} />
          )
        })}
      </div>
      <hr className='hr'/>
      <GearForm addCardFn={addCard}/>
    </div>
  )
}

export default App;


