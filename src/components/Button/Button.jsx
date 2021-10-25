
import  "./Button.module.css"

const Button = (props) => {
    return(
        <>
        <button  onClick={props.OnButtonClick }> {props.buttonText}</button>
        </>
    );
};
export default Button;