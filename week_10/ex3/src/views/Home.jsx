import { useState } from "react";
import { nanoid } from "nanoid";
import Masthead from "../Masthead/Masthead";
import ItemCard from "../ItemCard/ItemCard";
import { GearForm } from "../GearForm/GearForm";
import gearData from "../assets/gearData.json";

export function Home() {
const [gear, setGear] = useState(gearData);
  console.log(gear)
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
// function addCard(newCard) {
//   const cardWidthId = {
//     ...newCard,
//     id: nanoid()
//   }
//   setGear([...gear,cardWidthId])
//  }

return(
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
      {/* <hr className='hr'/>
      <GearForm addCardFn={addCard}/> */}
    </div>
)
}