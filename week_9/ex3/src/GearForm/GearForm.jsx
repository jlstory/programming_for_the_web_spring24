import { useState } from "react"
import PropTypes from "prop-types";
import "./GearForm.css"
import clsx from "clsx";
export function GearForm({ addCardFn }) {
    const initialCardSetting = {
        item: "",
        brand: "",
        price: "",
        affordable: true,
        id: "" 
    }
    // const [buttonState, setButtonState] = useState('true', 'false');
    const [newCard, setNewCard] = useState(initialCardSetting);
    // error state variable
    const [errorObj, setErrorObj] = useState({
        item: "",
        brand: "",
        price: "",
    });

    // validate function
 function validateForm(newCard) {
        console.log("triggering validation", !!newCard.brand)
        let valid = true;
        if(!newCard.brand) {
            console.log("setting error object")
            //set error object tabi prop to error message
            setErrorObj((prevErrorObj) => {
                return {
                    ...prevErrorObj,
                    brand: "This field is required"
                }
            });
            //return false;
            valid = false;
        }
        if(!newCard.item) {
            //set image prop to error message
            setErrorObj((prevErrorObj) => {
                return {
                    ...prevErrorObj,
                    item: "This field is required"
                }
            });
            //return false;
            valid = false;
        }
        if(!newCard.price ) {
            //set image prop to error message
            setErrorObj((prevErrorObj) => {
                return {
                    ...prevErrorObj,
                    price: "This field is required"
                }
            });
            //return false;
            valid = false;
        }
        
        console.log(valid)
        return valid;
    }
    
    function changeHandler(event) {
         if(event.target.name === GearForm.affordable) {
            setNewCard((prevCard) => {
                return{
                    ...prevCard,
                    affordable: event.target.value === "true" ? true : false}})              
                } else {
                    setNewCard((prevCard) => {
                        return {
                            ...prevCard,
                            [event.target.name]: event.target.value}
                        }
                    )
                }
        setNewCard((prevCard) => {
            return {
                ...prevCard,
                [event.target.name]: event.target.value
            }
        })
    }
    function submitHandler(event) {
        event.preventDefault();
        if (validateForm(newCard)) {
            addCardFn(newCard);
            console.log({newCard});
            setNewCard({
            ...initialCardSetting,
        });
       
    }
}
    
    return (
        <form className="gear_form--wrapper" onSubmit={submitHandler}>
            <fieldset>
                <legend>Gear Details</legend>
                <div className="formInline">
                <div className={clsx({"form-group": true, "error": errorObj.brand})}>
                    <label className="required" htmlFor="brand">Brand / Logo URL: </label>   
                        <input 
                            type="text" 
                            name="brand" 
                            id="brand"
                            value={newCard.brand}
                            onChange={changeHandler}
                            onBlur={() => {
                                if(newCard.brand) {
                                    setErrorObj((prevErrorObj) => {
                                        return {
                                            ...prevErrorObj,
                                            brand: ""
                                        }
                                    })
                                }
                            }}
                    />
                     {errorObj.brand && (
                        <>
                        <br />
                        <small className="errorFeedback">{errorObj.name}</small>
                        </>
                    )}             
                </div>
                <div className={clsx({"form-group": true, "error": errorObj.item})}>
                    <label className="required" htmlFor="item">Product or Item: </label>   
                        <input 
                            type="text" 
                            name="item" 
                            id="item"
                            value={newCard.item}
                            onChange={changeHandler}
                            onBlur={() => {
                                if(newCard.item) {
                                    setErrorObj((prevErrorObj) => {
                                        return {
                                            ...prevErrorObj,
                                            item: ""
                                        }
                                    })
                                }
                            }}
                    />
                     {errorObj.item && (
                        <>
                        <br />
                        <small className="errorFeedback">{errorObj.name}</small>
                        </>
                    )}                       
                </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Additional Details</legend>
                <div className={clsx({"form-group": true, "error": errorObj.price})}>
                    <label className="required" htmlFor="price">Retail Price: </label>   
                        <input 
                            type="text" 
                            name="price" 
                            id="price"
                            value={newCard.price}
                            onChange={changeHandler}
                            onBlur={() => {
                        if(newCard.price) {
                            setErrorObj((prevErrorObj) => {
                                return {
                                    ...prevErrorObj,
                                    price: ""
                                }
                            })
                        }
                    }}
                    />
                     {errorObj.price && (
                        <>
                        <br />
                        <small className="errorFeedback">{errorObj.brand}</small>
                        </>
                    )}                 
                </div>
                {/* <div className="formGroup">
                    <label htmlFor="affordable">Is it Affordable? </label>   
                        <input 
                            type="text" 
                            name="affordable" 
                            id="affordable"
                            value={newCard.affordable}
                            onChange={changeHandler}
                            />                
                </div> */}
                <div className="formgroup">
                    <label htmlFor="affordable">Is it Affordable? </label>
                    <select 
                        name="affordable" 
                        id="affordable"
                        value={newCard.affordable.multiple}
                        onChange={changeHandler}
                    >
                        <option value="true">yes</option>
                        <option value="false">no</option> 
                    </select>  
                </div>
                {/* <div className="formGroup">
                    <label htmlFor="affordable">Is it Affordable? </label>   
                        <input 
                            type="radio" 
                            name="affordable" 
                            id="affordable"
                            value={newCard.affordable}
                            checked={setButtonState}
                            onChange={changeHandler}
                            />                
                </div> */}
                {/* <div className="formGroup checkbox-group">
                    <label htmlFor="affordable">Is it Affordable: </label>   
                        <input 
                            type="checkbox" 
                            name="affordable" 
                            id="affordable"
                            // value={newCard.affordable}
                            onChange={changeHandler}
                            checked={newCard.affordable === 'on' ? Boolean('on').valueOf(true) : Boolean(true)}
                            />                
                </div> */}
            </fieldset>
            <button className="btn--submit" type="submit">Add Card</button>
        </form>
    );
}
GearForm.propTypes = {
    addCardFn: PropTypes.func.isRequired
} 