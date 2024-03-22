import { useState } from "react";
import "./AlpacaForm.css";

export function AlpacaForm() {
    const initialFormData = {
        firstName: "",
        lastName: "",
        street: "",
        state: "Minnesota",
        country: "",
        colors: []
      }
    const states = [
        "Alaska",
        "Alabama",
        "Arkansas",
        "Arizona",
        "California",
        "Colorado",
        "Connecticut",
        "District of Columbia",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Iowa",
        "Idaho",
        "Illinois",
        "Indiana",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Massachusetts",
        "Maryland",
        "Maine",
        "Michigan",
        "Minnesota",
        "Missouri",
        "Mississippi",
        "Montana",
        "North Carolina",
        "North Dakota",
        "Nebraska",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "Nevada",
        "New York",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Virginia",
        "Vermont",
        "Washington",
        "Wisconsin",
        "West Virginia",
        "Wyoming",
    ];

      const [formObject, setFormObject] = useState(initialFormData);
      const [errorObject, setErrorObject] = useState({
        firstName: "",
        lastName: ""
      })
      function changeHandler(event) {
        console.log(event.target.value);
        if(event.target.name === "colors") {
          const colorName = event.target.id;
          if(formObject.colors.includes(colorName)) {
            setFormObject({
              ...formObject,
              colors: formObject.colors.filter((color) => color !== colorName)
            })
          } else {
            setFormObject({
              ...formObject,
              colors: [...formObject.colors, colorName]
            })
          }
        } else {
        setFormObject((previousForm) => {
          console.log(event.target.name)
    
            return {
              ...previousForm,
              [event.target.name]: event.target.value
            }
        })
      }
    }

      function validateFirstName(event) {
        if (!event.target.value) {
          setErrorObject({
            ...errorObject,
            firstName: true
          })
        } else {
          setErrorObject({
            ...errorObject,
            firstName: false
          })
        }
      }
      function validateLastName(event) {
        if (!event.target.value) {
          setErrorObject({
            ...errorObject,
            lastName: true
          })
        } else {
          setErrorObject({
            ...errorObject,
            lastName: false
          })
        }
      }
      function handleSubmit(event) {
        console.log("submit triggered")
        event.preventDefault();
        console.log("the whole form object", formObject)
      }

    return(
        <>
      <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Personal Information</legend>
        <div className="formgroup">
          <label htmlFor="firstName" className="required">First Name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formObject.firstName} 
            onChange={changeHandler}
            onBlur={validateFirstName}
            />
            {errorObject.firstName && (
              <>
                <br />
                <small>First Name is Required.</small>
              </>
            )}
          </div>
        <div className="formgroup">
          <label htmlFor="lastName" className="required">Last Name: </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formObject.lastName}
            onChange={changeHandler}
            onBlur={validateLastName}
            />
            {errorObject.lastName && (
              <>
                <br />
                <small>Last Name is Required.</small>
              </>
            )}
        </div>
          <div className="formgroup">
          <label htmlFor="street">Street Address: </label>
          <input
            type="text"
            name="street"
            id="street"
            value={formObject.street}
            onChange={changeHandler}
            />
        </div>
        <div className="formgroup">
          <label htmlFor="state">State/Province: </label>
          <select
            name="state"
            id="state"
            value={formObject.state}
            onChange={changeHandler}
          >
            {states.map((singleState, index) => {
                return (
                    <option key={index} value={singleState}>{singleState}</option>
                )
            })}
          </select>
          </div>
        <div className="formgroup">
          <label htmlFor="country">Country: </label>
          <input
            type="text"
            name="country"
            id="country"
            value={formObject.country}
            onChange={changeHandler}
            />
          </div>
      </fieldset>
      <fieldset>
        <legend>Tell us about your alpaca interests!</legend>
        <p>Favorite alpaca color</p>
        <div className="formgroup">
          <label htmlFor="brown">
            <input
              type="checkbox"
              name="colors"
              id="brown"
              checked={formObject.colors.includes("brown")}
              onChange={changeHandler}
            />Brown
          </label>
          <label htmlFor="black">
            <input
              type="checkbox"
              name="colors"
              id="black"
              checked={formObject.colors.includes("black")}
              onChange={changeHandler}
            />Black
          </label>
          <label htmlFor="beige">
            <input
              type="checkbox"
              name="colors"
              id="beige"
              checked={formObject.colors.includes("beige")}
              onChange={changeHandler}
            />Beige
          </label>
          <label htmlFor="pinto">
            <input 
              type="checkbox"
              name="colors"
              id="pinto"
              checked={formObject.colors.includes("pinto")}
              onChange={changeHandler}
            />Pinto
          </label>
        </div>
      </fieldset>
      <button type="submit" disabled={errorObject.firstName || errorObject.lastName}>
        Sign me up!
      </button>
    </form>
        </>
    )
}