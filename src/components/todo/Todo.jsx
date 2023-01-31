import { useState } from "react"
import Swal from 'sweetalert2'

export default function Todo(props) {

   const { list, setList } = props

   const classSuccess = 'success'
   const classNotSuccess = 'warning'

   const [completed, setCompleted] = useState(classNotSuccess)
   const [buttonClass, setButtonClass] = useState(classSuccess)

   const updateDone = function () {
      const todoToUpdate = list.filter(todo => todo.id === props.data.id)
      todoToUpdate[0].done = props.data.done ? false : true
      if (props.data.done) {
         setCompleted(classSuccess)
         setButtonClass(classNotSuccess)
      } else {
         setCompleted(classNotSuccess)
         setButtonClass(classSuccess)
      }
   }

   const deleteTodo = function () {
      setList(list.filter(todo => todo.id !== props.data.id))
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
            <p className="badge bg-dark text-wrap my-0">{props.data.timeline}</p>
            <h4 className="text-primary">{props.data.title}</h4>
            <p className="text-secondary text-wrap">{props.data.description}</p>
         </div>

         <div className="d-flex flex-row flex-lg-column justify-content-between gap-2 mx-1">
            <button type="submit" className={`btn btn-${buttonClass}`} style={{ width: "125px" }} onClick={updateDone}>
               {props.data.done ? "To complete" : "Completed"}
            </button>

            <button type="submit" className="btn btn-danger col" style={{ width: "125px" }} onClick={deleteAlert}>
               Delete
            </button>
         </div>

      </article>
   )
}