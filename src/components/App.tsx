import React, { useState } from "react"
import Navbar from "./partials/Navbar"
import TaskList from "./todo/TaskList"
import NewTodo from "./todo/NewTodo"
import { Item } from "./types/Item"

export default function App() {

   const [ list, setList ] = useState<Array<Item>>([])
   
   const addItem = function(newItem: Item): void {
      setList([...list, newItem])
   }
  
   return (
    <main>

      <Navbar />

      <div className="container text-center d-lg-flex justify-content-around w-75 gap-4">
         <NewTodo addItem={addItem} />
         <TaskList list={list} setList={setList} />
      </div>

    </main>
  );
}
