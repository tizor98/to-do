import { useRef, useState } from "react"

export default function NewTodo(props) {
   
   const [ description, setDescription ] = useState()
   const [ title, setTitle ] = useState()
   const timeline = useRef()

   const { addItem } = props

   const handleSubmit = function(e) {
      
      e.preventDefault()
      
      addItem({
         id: new Date().toString(),
         title,
         description,
         timeline: timeline.current.value,
         done: false
      })
      
      setDescription('')
      setTitle("")
   }
   
   return (
      <form onSubmit={handleSubmit} className="mt-5 border border-2 border-info rounded-5 p-5" style={{maxHeight:"550px"}}>
         
         <h2>Create new ToDo</h2>

         <div className="mb-3">
            <label for="title">Title</label>
            <input type="text" className="form-control" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
         </div>

         <div className="mb-3">
            <label for="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" value={description} onChange={e => setDescription(e.target.value)} rows="4"></textarea>
         </div>

         <div className="mb-3">
            <label for="timeline" className="form-label">Date for completition</label>
            <input ref={timeline} type="date" className="form-control" id="timeline"/>
         </div>

         <button type="submit" className="btn btn-primary" disabled={title && description ? "" : "disabled"}>Add note</button>

      </form>
   )
}