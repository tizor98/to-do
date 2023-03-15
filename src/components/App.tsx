import React, { useState } from "react"
import Navbar from "./partials/Navbar"
import TaskList from "./todo/TaskList"
import NewTodo from "./todo/NewTodo"
import { Item } from "./types/Item"
import { storage } from "./types/LocalStorage"

export default function App() {

   const initialList: Array<Item> = storage.getItem('list')

   const [ list, setList ] = useState<Array<Item>>(initialList)
   
   const addItem = function(newItem: Item): void {
      const newList: Array<Item> = [...list, newItem]
      storage.setItem('list', newList)
      setList(newList)
   }
  
   return (
    <main>

      <Navbar />

      <div className="container text-center d-lg-flex justify-content-around gap-4 mb-5" style={{width: '95%'}}>
         <NewTodo addItem={addItem} />
         <TaskList list={list} setList={setList} />
      </div>

    </main>
  );
}
