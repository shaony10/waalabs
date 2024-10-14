import TodoContext, {TodoContextType} from "./TodoContext";
import {ReactNode, useState} from "react";
import Todo from "../types/Todo";
import {v4 as uuidv4} from "uuid";

interface TodoContextProviderType {
    children: ReactNode;
}

export const TodoContextProvider = (props: TodoContextProviderType) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [selectedCount, setSelectedCount] = useState(0);

    const populateTodos = async () => {
        ///https://dummyjson.com/todos'
        const response = await fetch('http://localhost:3004/todos');
        const data = await response.json();
        setTodos(data);
        updateCounts(data);
    }
    const addTodo = (task: string) => {
        const newTodo = {
            id: uuidv4(),
            todo: task,
            completed: false,
            userId: 1
        } as Todo;

        setTodos([newTodo, ...todos]);
    }
    const onChecked = (id: number | string, completed: boolean) => {
        const newTodos = todos!.map(todo => {
            if (todo.id === id) return ({...todo, completed});
            else return todo;
        });
        updateCounts(newTodos);
    }
    const onDeleteItem = (id: number | string) => {
        const newTodos = todos!.filter(todo => {
            return (todo.id !== id);
        });
        updateCounts(newTodos);
    }

    const onChangeAll = (isChecked: boolean) => {
        const newTodos = todos!.map(todo => {
            return ({...todo, completed: isChecked});
        });


        updateCounts(newTodos);
    }
    const deleteSelectedItems = () => {
        const newTodos = todos!.filter(todo => {
            return !todo.completed;
        });
        updateCounts(newTodos);
    }

    const updateCounts = (newTodos: Todo[]) => {
        setTodos(newTodos);
        const selectedItems = newTodos.filter(t => t.completed);
        setSelectedCount(selectedItems.length);
    }

    const initialValue: TodoContextType = {
        todos: todos,
        selectedCount: selectedCount,
        populateTodos: populateTodos,
        addTodo: addTodo,
        onChecked: onChecked,
        onDeleteItem: onDeleteItem,
        onChangeAll: onChangeAll,
        deleteSelectedItems: deleteSelectedItems
    };
    return (
        <TodoContext.Provider value={initialValue}>
            {props.children}
        </TodoContext.Provider>
    )
}