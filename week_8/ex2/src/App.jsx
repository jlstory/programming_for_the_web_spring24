import { useState } from 'react'
import './App.css'
import AnimalsComp from './AnimalsComp';

function App() {
  const [headline, setHeadline] = useState("Some Pretty Cool Animals");
  const [animals, setAnimals] = useState([    
    "dogs",
    "cats",
    "turtles",
    "birds",
    "apes",
    "butterflies",
    "spiders",
    "octopi",
    "sloths",
    "lizards",
    "bunnies",
    "chipmunks",
    "otters",
    "elephants",
    "tigers",
    "horses",
    "zebras", 
    "bees",
    "orcas",
    "dolphins",
    "snakes", 
    "lions",
    "bears",
    "llamas, I guess..."
  ]);
  function deleteAnimal(animalName) {
    const updatedArray = animals.filter((animal) => {
    return animal !== animalName;
    });
    setAnimals(updatedArray);
  }
  function focusAnimal (animalName) {
    setHeadline(animalName);
  }
  return (
    <>
    <div>
      <h1>{'the focus is on ' + headline + '!'}</h1>
      {animals.map((myAnimal) => {
        return <AnimalsComp 
        key={myAnimal} 
        animalName={myAnimal}
        deleteFn={deleteAnimal}
        focusFn={focusAnimal} />
      })}
   </div>
   </>
  )
}

export default App
