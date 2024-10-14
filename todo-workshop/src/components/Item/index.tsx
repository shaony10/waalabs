import React, {ChangeEvent, useContext} from "react";
import './index.css';
import Todo from "../../types/Todo";
import TodoContext from "../../context/TodoContext";

type PropType = {
    todo: Todo
}
export default function (props:PropType) {
    const {todo} = props;

    const context = useContext(TodoContext);
    if (!context){
        throw new Error("TodoContext must be used within a ToDoContextProvider");
    }
    const { onChecked, onDeleteItem} = context;

    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        console.log(e.currentTarget.value);
        console.log(e.currentTarget.checked);
        onChecked(todo.id, e.currentTarget.checked);

    }

    const deleteItem =()=>{
        const response = window.confirm("Are you sure to delete?");
        console.log(response);
        if (response){
            onDeleteItem(todo.id);
        }
    }
    return <li>
        <label>
            <input type="checkbox" checked={todo.completed} onChange={changeEventHandler}/>
            <span>{todo.todo}</span>
        </label>
        <button className="btn btn-danger" onClick={deleteItem}>Delete</button>
    </li>;
}