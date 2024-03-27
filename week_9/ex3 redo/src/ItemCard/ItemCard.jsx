/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import "./ItemCard.css";
import clsx from "clsx";
import { GearForm } from "../GearForm/GearForm";
import trash from "../assets/icons/trash-can-solid.svg";
import copy from "../assets/icons/copy-solid.svg";

export default function ItemCard({
    item,
    brand,
    price,
    affordable,
    id,
    deleteFn,
    duplicateFn  
}){
    return(
        <div className="gearCard">
            <div className="cardImg">
                <img src={brand} alt="brand logo" />
            </div>
            <div className="title">
                <h3>{item}</h3>
            </div>
            <div className="price">
                <p>price: ${price}</p>
            </div>
            <div className="affordable">
                <p style={{color: affordable ? "green" : "red"}}>
                affordability: {affordable === true ? 'yes' : 'no'}</p>
            </div>
            <div className="actions">
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    deleteFn(id)
                }}><img className="icon" src={trash} /></a>
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    duplicateFn(id)
                }}><img className="icon" src={copy} /></a>
            </div>
        </div>
    )
}
ItemCard.propTypes = {
    item: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.string,
    affordable: PropTypes.bool,
    id: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func 
}