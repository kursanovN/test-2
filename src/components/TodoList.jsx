import React from "react"

export function Todolist(props) {
    return <li className="list-item">
        {props.item}
        <span className="icons-delete">
        <i className="fa-solid fa-trash-can" onClick={e=>{
            props.deleteItem(props.index )
        }}></i>
        </span>
    </li>
}