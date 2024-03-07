/* eslint-disable react/prop-types */
export default function AnimalsComp({animalName, deleteFn, focusFn}) {
    return (
        <>        
        <div className="cardBlocks">
            <strong>{animalName}</strong>
            <div>
                <button onClick={() => {
                    focusFn(animalName);
                }}>Focus</button> | <button onClick={() => {
                    deleteFn(animalName);
                }}>Delete</button>
            </div>
        </div>
    </>
    )
}