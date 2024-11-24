import "./App.css";
import CreateToDo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [itemList, setitemList] = useState([]);
  const [counter, setcounter] = useState(1);
  const [toDo, settoDo] = useState("");

  async function getItems() {
    let response = await axios.get("http://127.0.0.1:8000/toDos");
    let getData = await response.data;
    setitemList(getData);
  }

  async function createItem() {
    setcounter((prev) => prev + 1);
    await axios.post("http://127.0.0.1:8000/items", {
      id: counter,
      content: toDo,
    });
    settoDo("");
    await getItems();
  }

  async function deleteItem(itemId){
    await axios.delete(`http://127.0.0.1:8000/toDos/${itemId}`);
    await getItems();
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="App">
      <CreateToDo toDo={toDo} settoDo={settoDo} createItem={createItem} />
      <ToDoList itemList={itemList} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
