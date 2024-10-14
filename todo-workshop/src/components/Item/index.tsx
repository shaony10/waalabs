import React, {ChangeEvent} from "react";
import './index.css';
import Todo from "../../types/Todo";

type PropType = {
    todo: Todo,
    onChecked:(id:number|string, completed: boolean)=>void,
    onDelete:(id:number|string)=>void
}
export default function (props:PropType) {
    const {todo,onChecked, onDelete} = props;
    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        console.log(e.currentTarget.value);
        console.log(e.currentTarget.checked);
        onChecked(todo.id, e.currentTarget.checked);

    }

    const deleteItem =()=>{
        const response = window.confirm("Are you sure to delete?");
        console.log(response);
        if (response){
            onDelete(todo.id);
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