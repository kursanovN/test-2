import "./App.css";
import { TodoInput } from "./components/TodoInput";
import { Todolist } from "./components/TodoList";
import { useState } from "react";
function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    inputText &&
     setListTodo([...listTodo, inputText]);
  };
  const deleteListItem = () => {
    let newListTodo = [...listTodo];
    newListTodo.splice("key", 1);
    setListTodo([...newListTodo]);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <h1 className="app-heading">Todo</h1>
        <hr />
        <TodoInput addList={addList} />
        {listTodo.map((listItems) => {
          return (
            <Todolist
              key={"i"}
              index={"i"}
              item={listItems}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
