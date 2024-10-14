import React, {ChangeEvent} from "react";
import './index.css';

type PropType={
    totalCount:number,
    selectedCount:number,
    deleteSelectedItems:()=>void,
    onChangeAll:(isChecked:boolean)=>void
}
export default function(props:PropType){
    const {totalCount, selectedCount, deleteSelectedItems, onChangeAll} = props;

    const deleteSelectedItemsHandler = ()=>{
        const response = window.confirm("Delete all selected items?");
        if (response){
            deleteSelectedItems();
        }
    }

    const changeAllEventHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        console.log(e.currentTarget.value);
        console.log(e.currentTarget.checked);
        onChangeAll(e.currentTarget.checked);

    }

    return <div className="todo-footer">
        <label>
            <input type="checkbox" checked={totalCount===selectedCount && selectedCount!==0}
                   onChange={changeAllEventHandler}/>
        </label>
        <span>
          <span>Finished {selectedCount}</span> / total {totalCount}</span>
        <button className="btn btn-danger" onClick={deleteSelectedItemsHandler}>Delete Finished Tasks</button>
    </div>;
}