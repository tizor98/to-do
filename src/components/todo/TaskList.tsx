import React, { Dispatch, SetStateAction } from "react"
import Todo from "./Todo"
import { Item } from "../types/Item"

export type PropsList = {
   list: Item[],
   setList: Dispatch<SetStateAction<Item[]>>
}

export default function TaskList({ list, setList }: PropsList) {

   const drawTodo = list.map( (item, index) => <Todo key={index} item={item} list={list} setList={setList} />)
   
   return (
      <div className="d-flex flex-column align-items-center justify-content-center mt-4" style={{minWidth:"75%"}}>
         {list.length ? drawTodo : <h3>You haven't written any ToDos yet</h3>}
      </div>
   )
}
