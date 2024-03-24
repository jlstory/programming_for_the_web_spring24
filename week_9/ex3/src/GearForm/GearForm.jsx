import { useState } from "react"
import "./GearForm.css"
export function GearForm() {
    const initialCardSetting = {
        item: "",
        brand: "",
        price: "",
        affordable: false,
        id: "" 

    }
    const [newCard, setNewCard] = useState(initialCardSetting);
    function changeHandler(event) {
        setNewCard((prevCard) => {
            return {
                ...prevCard,
                [event.target.name]: event.target.value
            }
        })
    }
    function submitHandler(event) {
        event.preventDefault();
        console.log({newCard});
    }
    return (
        <form className="gear_form--wrapper" onSubmit={submitHandler}>
            <fieldset>
                <legend>Gear Details</legend>
                <div className="formGroup">
                    <label htmlFor="brand">Brand / Logo URL: </label>   
                        <input 
                            type="text" 
                            name="brand" 
                            id="brand"
                            value={newCard.brand}
                            onChange={changeHandler}
                            />                
                </div>
                <div className="formGroup">
                    <label htmlFor="item">Product or Item: </label>   
                        <input 
                            type="text" 
                            name="item" 
                            id="item"
                            value={newCard.item}
                            onChange={changeHandler}
                            />                
                </div>
            </fieldset>
            <fieldset>
                <legend>Additional Details</legend>
                <div className="formGroup">
                    <label htmlFor="price">Retail Price: </label>   
                        <input 
                            type="text" 
                            name="price" 
                            id="price"
                            value={newCard.price}
                            onChange={changeHandler}
                            />                
                </div>
                <div className="formGroup checkbox-group">
                    <label htmlFor="affordable">Affordable?: </label>   
                        <input 
                            type="checkbox" 
                            name="affordable" 
                            id="affordable"
                            // value={newCard.affordable}
                            onChange={changeHandler}
                            checked={newCard.affordable.true}
                            />                
                </div>
            </fieldset>
            <button type="submit">Add Card</button>
        </form>
    )
}