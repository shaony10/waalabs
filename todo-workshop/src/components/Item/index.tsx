import React, {ChangeEvent} from "react";
import './index.css';
import Todo from "../../types/Todo";
import {useTodoContext} from "../../context/CustomTodoContext";

type PropType = {
    todo: Todo
}
export default function Item(props:PropType) {
    const {todo} = props;

    const { onChecked, onDeleteItem} = useTodoContext();

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