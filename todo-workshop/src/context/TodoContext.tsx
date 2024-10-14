import {createContext} from "react";
import Todo from "../types/Todo";

export interface TodoContextType{
    todos: Todo[];
    populateTodos: () => void;
}

const TodoContext = createContext<TodoContextType|undefined>(undefined);


// context provider here
//


export default TodoContext;