import "./Input.module.css"
const InputText = (props) => {
    return(
       <input type="text" size="50" style={{height:"30px"}}
       onChange={props.onChangeHandler}
       value= {props.value}
       onKeyUp={props.onKeyInput}
       /> 
    );
};
export default InputText;