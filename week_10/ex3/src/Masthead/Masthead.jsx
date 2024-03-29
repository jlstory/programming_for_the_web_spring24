import mastheadImg from "../assets/masthead.png";
import "./Masthead.css";
export default function Masthead() {
    return (
        <div className="masthead">
            <img className="masthead--img" src={mastheadImg} alt="josh's gear collection" />
            <h1>Josh&apos;s Wishful Thinking Collection</h1>
        </div>
    )
}