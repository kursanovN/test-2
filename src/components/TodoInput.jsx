import React from "react";
import { useState } from "react";

export function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="input-container">   
      <input
        type="text"
        className="input-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
      />
      <button className="add-btn" onClick={()=>{
        props.addList(inputText)
        setInputText('')
      }}>+</button>
    </div>
  );
}
