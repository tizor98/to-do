import React, { Dispatch, SetStateAction, useState } from "react"
import Swal from 'sweetalert2'
import { Item } from "../types/Item"

type PropsInfo = {
   item: Item,
   list: Item[],
   setList: Dispatch<SetStateAction<Item[]>>
}

export default function Todo({ item, list, setList }: PropsInfo) {

   const classSuccess = 'success'
   const classNotSuccess = 'warning'

   const [completed, setCompleted] = useState<string>(classNotSuccess)
   const [buttonClass, setButtonClass] = useState<string>(classSuccess)

   const updateDone = function (): void {
      const todoToUpdate = list.filter(todo => todo.id === item.id)
      todoToUpdate[0].done = item.done ? false : true
      if (item.done) {
         setCompleted(classSuccess)
         setButtonClass(classNotSuccess)
      } else {
         setCompleted(classNotSuccess)
         setButtonClass(classSuccess)
      }
   }

   const deleteTodo = function (): void {
      setList(list.filter(todo => todo.id !== item.id))
   }

   const deleteAlert = () => {
      Swal.fire({
         title: 'Are you sure?',
         showConfirmButton: false,
         showDenyButton: true,
         showCancelButton: true,
         denyButtonText: `Yes, delete it!`,
      }).then((result) => {
         if(result.isDenied) {
            deleteTodo()
            Swal.fire('ToDo was deleted', '', 'success')
         }
      })
   }
   
   return (
      <article className={`d-flex flex-column flex-lg-row align-items-center justify-content-between bg-light bg-gradient border border-3 p-4 border-${completed} rounded-4 my-2 mx-0`} style={{ width: "max(90%, 696px)", minHeight: "120px", maxWidth: "100%" }}>

         <div className="align-self-start d-flex flex-column align-items-start text-start" >
            <p className="badge bg-dark text-wrap my-0">{item.timeline.toString()}</p>
            <h4 className="text-primary">{item.title}</h4>
            <p className="text-secondary text-wrap">{item.description}</p>
         </div>

         <div className="d-flex flex-row flex-lg-column justify-content-between gap-2 mx-1">
            <button type="submit" className={`btn btn-${buttonClass}`} style={{ width: "125px" }} onClick={updateDone}>
               {item.done ? "To complete" : "Completed"}
            </button>

            <button type="submit" className="btn btn-danger col" style={{ width: "125px" }} onClick={deleteAlert}>
               Delete
            </button>
         </div>

      </article>
   )
}