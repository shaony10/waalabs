import React, {useContext} from "react";
import './index.css';
import Item from "../Item";
import TodoContext from "../../context/TodoContext";

export default function () {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("TodoContext must be used within a ToDoContextProvider");
    }
    const {todos} = context;
    return (
        <ul className="todo-main">
            {todos.map((todo, index) =>
                <Item key={todo.id} todo={todo}/>
            )}

        </ul>);
}