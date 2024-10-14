import React from "react";
import './index.css';
import Item from "../Item";
import Todo from "../../types/Todo";

type PropType = {
    todos: Todo[],
    onChecked:(id:number|string, completed: boolean)=>void,
    onDelete:(id:number|string)=>void
}
export default function (props: PropType) {
    const {todos, onChecked, onDelete} = props;
    return (
        <ul className="todo-main">
            {todos.map((todo, index) =>
                <Item key={todo.id} todo={todo} onChecked={onChecked} onDelete={onDelete}/>
            )}

        </ul>);
}