import TodoContext, {TodoContextType} from "./TodoContext";
import {ReactNode, useState} from "react";
import Todo from "../types/Todo";

interface TodoContextProviderType {
    children: ReactNode;
}

export const TodoContextProvider = (props: TodoContextProviderType) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const populateTodos = async () => {
        console.log("Populating...")
        ///https://dummyjson.com/todos'
        const response = await fetch('http://localhost:3004/todos');
        const data = await response.json();
        setTodos(data);

    }

    const initialValue: TodoContextType = {
        todos: todos,
        populateTodos: populateTodos
    };

    return (
        <TodoContext.Provider value={initialValue}>
            {props.children}
        </TodoContext.Provider>
    )
}