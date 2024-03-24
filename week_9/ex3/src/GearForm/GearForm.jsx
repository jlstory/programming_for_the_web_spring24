import { useState } from "react"
import "./GearForm.css"
export function GearForm() {
    const initialCardSetting = {
        item: "",
        brand: "",
        price: "",
        affordable: [],
        id: "" 

    }
    const buttonState = Boolean([Boolean('true'), Boolean('false')]);
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
                <div className="formGroup">
                    <label htmlFor="affordable">Is it Affordable? </label>   
                        <input 
                            type="text" 
                            name="affordable" 
                            id="affordable"
                            value={newCard.affordable}
                            onChange={changeHandler}
                            />                
                </div>
                <div className="formgroup">
                    <label htmlFor="affordable">Is it Affordable? </label>
                    <select 
                        name="affordable" 
                        id="affordable"
                        value={newCard.affordable}
                        onChange={changeHandler}
                    >
                        <option value="true">yes</option>
                        <option value="false">no</option> 
                    </select>  
                </div>
                <div className="formGroup">
                    <label htmlFor="affordable">Is it Affordable? </label>   
                        <input 
                            type="radio" 
                            name="affordable" 
                            id="affordable"
                            value={newCard.affordable}
                            checked={buttonState}
                            onChange={changeHandler}
                            />                
                </div>
                {/* <div className="formGroup checkbox-group">
                    <label htmlFor="affordable">Is it Affordable: </label>   
                        <input 
                            type="checkbox" 
                            name="affordable" 
                            id="affordable"
                            // value={newCard.affordable}
                            onChange={changeHandler}
                            checked={newCard.affordable === 'on' ? Boolean('on').valueOf(true) : Boolean(false)}
                            />                
                </div> */}
            </fieldset>
            <button type="submit">Add Card</button>
        </form>
    )
}