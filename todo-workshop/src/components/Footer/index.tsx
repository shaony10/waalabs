import React, {ChangeEvent} from "react";
import './index.css';
import {useTodoContext} from "../../context/CustomTodoContext";

export default function Footer() {
    const {todos, selectedCount, deleteSelectedItems, onChangeAll} = useTodoContext();

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