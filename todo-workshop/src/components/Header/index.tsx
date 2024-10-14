import {KeyboardEvent, useContext} from "react";
import './index.css';
import TodoContext from "../../context/TodoContext";

export default function(){
    const context = useContext(TodoContext);
    if (!context){
        throw new Error("TodoContext must be used within a ToDoContextProvider");
    }
    const { addTodo} = context;
    const keyUpHandler =(e:KeyboardEvent<HTMLInputElement>)=>{

        if(e.key==="Enter"){
            console.log("Enter pressed");
            const value = e.currentTarget.value;
            addTodo(value);
            console.log(value);

            e.currentTarget.value  ="";
        }

    }
    return <div className="todo-header">
        <input type="text" placeholder="Enter task name" onKeyUp={keyUpHandler}/>
    </div>;
}