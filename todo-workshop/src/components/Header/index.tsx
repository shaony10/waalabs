import {KeyboardEvent} from "react";
import './index.css';
import {useTodoContext} from "../../context/CustomTodoContext";

export default function Header(){
    const { addTodo} = useTodoContext();
    const keyUpHandler =(e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==="Enter"){
            const value = e.currentTarget.value;
            addTodo(value);
            e.currentTarget.value  ="";
        }
    }
    return <div className="todo-header">
        <input type="text" placeholder="Enter task name" onKeyUp={keyUpHandler}/>
    </div>;
}