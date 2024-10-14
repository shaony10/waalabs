import React from "react";
import './index.css';
import Item from "../Item";
import {useTodoContext} from "../../context/CustomTodoContext";

export default function Main() {
    const {todos} = useTodoContext();
    return (
        <ul className="todo-main">
            {todos.map((todo, index) =>
                <Item key={todo.id} todo={todo}/>
            )}

        </ul>);
}