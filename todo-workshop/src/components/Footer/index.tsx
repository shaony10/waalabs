import React, {ChangeEvent, useContext} from "react";
import './index.css';
import TodoContext from "../../context/TodoContext";

export default function () {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("TodoContext must be used within a ToDoContextProvider");
    }
    const {todos, selectedCount, deleteSelectedItems, onChangeAll} = context;

    const deleteSelectedItemsHandler = () => {
        const response = window.confirm("Delete all selected items?");
        if (response) {
            deleteSelectedItems();
        }
    }

    const changeAllEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeAll(e.currentTarget.checked);

    }

    return <div className="todo-footer">
        <label>
            <input type="checkbox" checked={todos.length === selectedCount && selectedCount !== 0}
                   onChange={changeAllEventHandler}/>
        </label>
        <span>
          <span>Finished {selectedCount}</span> / total {todos.length}</span>
        <button className="btn btn-danger" onClick={deleteSelectedItemsHandler}>Delete Finished Tasks</button>
    </div>;
}