export default function Todo(props) {
   return (
      <article className="container bg-light bg-gradient" style={{width:"80%"}}>
         <div className="row">
            
         <h3 className="col col-3">{props.data.title}</h3>
         
         <p className="col col-6">{props.data.description}</p>
         
         <div className="col">

            <div className="row">
               <div className="col">
                  <button type="submit" className="btn btn-success">
                     Completed
                  </button>
               </div>
            </div>
            
            <div className="row">
               <div className="col">
                  <button type="submit" className="btn btn-danger col">
                     Delete
                  </button>
               </div>
            </div>

         </div>

         </div>
      </article>
   )
}