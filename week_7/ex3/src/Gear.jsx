/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import "./Odds.css"
export default function Gear({item, brand, price, affordable, odd}) {

  return (
    <>
        <tr className={odd && "odd"}>
            <td className="item">{item}</td>
            <td><img src={brand} alt='brand'></img></td>
            <td>{price}</td>
            <td style={{color: affordable.toLowerCase() === 'yes' ? "seagreen" : "red"}}>{affordable}</td>                   
        </tr>
    </>
  );
}
