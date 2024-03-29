import PropTypes from "prop-types"
import '../gearDetail.css';
import { useParams, Link } from 'react-router-dom';
export function GearDetail({data}) {
    const { id } = useParams();
    console.log("params", id);
    const selectedGear = data.find((gear) => gear.id === id);
    console.log("deck", selectedGear);
    return(
        <>
    
        <img className="detail--img" src={selectedGear.brand} alt={selectedGear.item} />
        <h1 className="detail--item">{selectedGear.item}</h1>
        <h2 className="detail--price">Price: ${selectedGear.price}</h2>
        <img className="detail--item_img" src={selectedGear.image} alt={selectedGear.item} />
        <p className="detail--desc">{selectedGear.desc}</p>
        <Link to="/" className="detail--link">&#10094; Return to Collection</Link>
        </>
    )
}

GearDetail.propTypes = {
    data: PropTypes.array
};