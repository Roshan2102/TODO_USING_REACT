import Button from "../Button/Button"
import InputText from "../InputText/InputText"
import List from "../List/List"
import React,{ useState ,useEffect} from "react";
import {SiAddthis} from "react-icons/si"




const TodoList = ()=>{

    const [InputTextValue, setInputTextValue]= useState('');
    const [listItem,setlistItem] = useState([])

    useEffect(()=>{
        const localToDo = localStorage.getItem("local")
        if(localToDo){
            const todo = JSON.parse(localToDo);
            setlistItem(todo)
        }
    },[])


    useEffect(()=>{
        localStorage.setItem("local",JSON.stringify(listItem))
    },[listItem]);

   const addTask=  ()=>{
        if(InputTextValue.trim()){
                 const lists= [...listItem];                     
                 const listitems = {
                     item:InputTextValue,
                    isEditItem:InputTextValue,
                    isDone:false,
                    isEdit:false,
                }
                lists.push(listitems);
                setInputTextValue('')
                setlistItem(lists)
        }
        else{
            setInputTextValue('')
        }
    
    };

    const inputText=(event)=>{
        const TextValue= event.target.value;
        setInputTextValue(TextValue)

    };

    const buttonClickHandler = (event)=>{
                if(event.which ===13){
                    addTask();
                }
    };
   
    const isDoneHandler = (listIndex)=>{
            const lists= [...listItem]; 
            lists[listIndex].isDone=true;
            setlistItem(lists)  
    
    };

    const isDeleteHandler =(listIndex)=>{
        const lists= [...listItem];
        lists.splice(listIndex,1);
        setlistItem(lists) 
    };

    const swapListItem = (initialIndex,finalIndex)=>{
        const lists= [...listItem];
        const temp= lists[initialIndex];
         lists[initialIndex] =lists[finalIndex];
         lists[finalIndex] = temp;
         setlistItem(lists);
    };
    
    const isEditItemHandler= (listIndex)=>{
        const lists= [...listItem];
        lists[listIndex].isEdit=true;
        setlistItem(lists);  
    };

    const isSubmitItemHandler =(listIndex)=>{
        const lists= [...listItem];
        lists[listIndex].item= lists[listIndex].isEditItem;
        lists[listIndex].isEdit=false;
        setlistItem(lists);   
    };

    const onEditItemHandler=(listIndex,editedText)=>{
        const lists= [...listItem];
        lists[listIndex].isEditItem=editedText;
        setlistItem(lists);   
    };

  const onItemCancelHandler=(listIndex)=>{
    const lists= [...listItem];
    lists[listIndex].isEditItem= lists[listIndex].item;
    lists[listIndex].isEdit=false;
    setlistItem(lists); 
    };

    return(
        
        <>
        <div style={{textAlign:"center"}}>
            <InputText
            onChangeHandler = {inputText}
           
            value= {InputTextValue}
            onKeyInput={buttonClickHandler}
            />
            <Button
            buttonText={<SiAddthis size="30" color="purple"/>}
           OnButtonClick={addTask}
            />
            </div>
            <List 
              listItem={listItem}
              doneHandler={isDoneHandler}
              deleteHandler={isDeleteHandler}
              swapListItemHandler = {swapListItem}
              editHandler={isEditItemHandler}
              submitHandler={isSubmitItemHandler}
              editItemsHandler={onEditItemHandler}
              onItemCancel={onItemCancelHandler}

            /> 
             

        </>
    );
};
export default TodoList;