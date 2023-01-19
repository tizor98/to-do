import { useState } from "react"

export default function NewTodo(props) {
   
   const [ description, setDescription ] = useState()
   const [ title, setTitle ] = useState()

   const { addItem } = props

   const handleSubmit = function(e) {
      
      e.preventDefault()
      
      addItem({
         id: new Date().toString(),
         title,
         description,
         done: false
      })
      
      setDescription('')
      setTitle("")
   }
   
   return (
      <form onSubmit={handleSubmit}>
         
         <h2>Create new note</h2>

         <div className="mb-3">
            <label for="title">Title</label>
            <input type="text" className="form-control" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
         </div>

         <div className="mb-3">
            <label for="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" value={description} onChange={e => setDescription(e.target.value)} rows="3"></textarea>
         </div>

         <div className="mb-3">
            <label for="timeline" className="form-label">Date for completition</label>
            <input type="date" className="form-control" id="timeline"/>
         </div>

         <button type="submit" className="btn btn-primary" disabled={description ? "" : "disabled"}>Add note</button>

      </form>
   )
}