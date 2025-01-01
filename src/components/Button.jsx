
import "./Button.css"
export default function Button({text, handleClick, type}){
    return(
        <button onClick={handleClick} type = {type} className="CustomButton">
            {text}
        </button>
    );
}