import React, { FormEvent, useRef, useState } from "react"

declare type PropsItem = {
   addItem: Function
}

export default function NewTodo({ addItem }: PropsItem) {
   
   const [ description, setDescription ] = useState<string>()
   const [ title, setTitle ] = useState<string>()
   const timelineRef = useRef<HTMLInputElement>(null!) // ! is a non-null assertion if we are sure that ref never will be null

   const handleSubmit = function(e: FormEvent): void {
      
      e.preventDefault()
      
      addItem({
         id: new Date(),
         title,
         description,
         timeline: new Date(timelineRef.current.value || new Date()).toDateString(),
         done: false
      })
      
      setDescription('')
      setTitle("")
   }
   
   return (
      <form onSubmit={handleSubmit} className="mt-5 border border-2 border-info rounded-5 p-5" style={{maxHeight:"550px"}}>
         
         <h2>Create new ToDo</h2>

         <div className="mb-3">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
         </div>

         <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" value={description} onChange={e => setDescription(e.target.value)} rows={4}></textarea>
         </div>

         <div className="mb-3">
            <label htmlFor="timeline" className="form-label">Date for completition</label>
            <input ref={timelineRef} name="timeline" type="date" className="form-control" id="timeline"/>
         </div>

         <button type="submit" className="btn btn-primary" disabled={title && description ? false : true}>Add note</button>

      </form>
   )
}
