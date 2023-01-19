import { useState } from "react"

export default function Todo(props) {
   
   const { list, setList } = props

   const classNameDone = "container bg-light bg-gradient border border-2 border-success rounded-4 my-2 text-center"
   const classNameNotDone = "container bg-light bg-gradient border border-2 border-warning rounded-4 my-2 text-center"

   const classNameButtonSuccess = "btn btn-success"
   const classNameButtonNotSuccess = "btn btn-warning"
   
   const [ completed, setCompleted ] = useState(classNameNotDone)
   const [ buttonClass, setButtonClass ] = useState(classNameButtonSuccess)
 
   const updateDone = function() {
      const todoToUpdate = list.filter( todo => todo.id === props.data.id)
      todoToUpdate[0].done = props.data.done ? false : true
      if(props.data.done) {
         setCompleted(classNameDone)
         setButtonClass(classNameButtonNotSuccess)
      } else {
         setCompleted(classNameNotDone)
         setButtonClass(classNameButtonSuccess)
      }
   }

   const deleteTodo = function() {
      setList(list.filter( todo => todo.id !== props.data.id))
   }

   return (
      <article className={completed} style={{minWidth:"90%", minHeight:"120px"}}>
         <div className="row">
            
         <h3 className="col col-3">{props.data.title}</h3>
         
         <p className="col col-6">{props.data.description}</p>
         
         <div className="col">

            <div className="row">
               <div className="col">
                  <button type="submit" className={buttonClass} onClick={updateDone}>
                     { props.data.done ? "To complete" : "Completed"}
                  </button>
               </div>
            </div>
            
            <div className="row">
               <div className="col">
                  <button type="submit" className="btn btn-danger col" onClick={deleteTodo}>
                     Delete
                  </button>
               </div>
            </div>

         </div>

         </div>
      </article>
   )
}