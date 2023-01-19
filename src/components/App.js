import Navbar from "./partials/Navbar"
import TaskList from "./todo/TaskList"
import NewTodo from "./todo/NewTodo"
import { useState } from "react"

export default function App() {

   const [ list, setList ] = useState([])
   
   const addItem = function(newItem) {
      setList([...list, newItem])
   }
  
   return (
    <main>

      <Navbar />

      <div className="container text-center d-md-flex justify-content-between" style={{width:"100%"}}>
         <NewTodo addItem={addItem} />
         <TaskList list={list} setList={setList} />
      </div>

    </main>
  );
}
