import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import styles from  "./List.module.css"
import {GrEdit} from "react-icons/gr"
import {CgArrowUpR,CgArrowDownR}  from "react-icons/cg"
import{AiFillDelete} from "react-icons/ai"
import {FaThumbsUp} from "react-icons/fa"


const List = (props) =>{
    const listLength = props.listItem.length-1
    const listValue= props.listItem.map((listitems,Index)=>
     (<li key={Index}>
         {listitems.isEdit && (
             <>
             <InputText
             value = {listitems.isEditItem}
             onChangeHandler={(event)=>{
                const editedText = event.target.value;
                props.editItemsHandler(Index,editedText)}}
             />
             <Button
             buttonText="SUBMIT"
             OnButtonClick={()=>{props.submitHandler(Index)}}
             />
             <Button
             buttonText="CANCEL"
             OnButtonClick={()=>{props.onItemCancel(Index)}}
             />

             </>
         )}

         {!listitems.isEdit  && (

                    <>
                    {/* Conditional styling for done lists  */}
                    <span className={listitems.isDone ? styles.isDoneItem:""}>
                        {listitems.item} 
                    </span>
                    {!listitems.isDone && (
                    <Button
                    buttonText={<GrEdit size="25" color="yellow"/>}
                    OnButtonClick={()=>{props.editHandler(Index)}}
                    />)}

                    {/* Conditional rendering - Up Button for first element */} 
                    { Index !==0 && 
                        (<Button
                            buttonText={<CgArrowUpR size="25" color="blue"/>}
                            OnButtonClick={()=>{props.swapListItemHandler(Index,Index-1)}}
                    />)}
                    {/* Conditional rendering - Down Button for last element */}
                    { Index !==listLength && 
                    (<Button
                            buttonText={<CgArrowDownR size="25" color="violet"/>}
                            OnButtonClick={()=>{props.swapListItemHandler(Index,Index+1)}}
                    />
                    )}
            
                {/* Conditional rendering  */}

                {!listitems.isDone && (
                    <Button
                        buttonText={<FaThumbsUp size="25" color="green"/>}
                        OnButtonClick ={()=>{props.doneHandler(Index)}}
                    />
                )}
                    {/* Conditional rendering  */}

                {listitems.isDone && (
                    <Button
                        buttonText={<AiFillDelete size="25" color="red"/>}
                        OnButtonClick ={()=>{props.deleteHandler(Index)}}
                    />
                )}
             </>
           
)} 
        </li>)
    )
    return(
        <ol id="myOl">{listValue}</ol>  
    );
};
export default List;
