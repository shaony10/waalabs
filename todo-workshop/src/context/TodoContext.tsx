import {createContext} from "react";
import Todo from "../types/Todo";

export interface TodoContextType{
    todos: Todo[];
    selectedCount:number;
    populateTodos: () => void;
    addTodo: (task: string) => void;
    onChecked:(id:number|string, completed: boolean)=>void;
    onDeleteItem:(id:number|string)=>void;
    deleteSelectedItems:()=>void;
    onChangeAll:(isChecked:boolean)=>void;
}

const TodoContext = createContext<TodoContextType|undefined>(undefined);


// context provider here
//


export default TodoContext;