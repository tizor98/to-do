import Todo from "./Todo"

export default function TaskList(props) {

   const { list, setList } = props

   const drawTodo = list.map( todo => <Todo key={todo.id} data={todo} list={list} setList={setList} />)
   
   return (
      <div className="d-flex flex-column align-items-center justify-content-center mt-4" style={{minWidth:"75%"}}>
         {list.length ? drawTodo : <h3>You haven't written any ToDos yet</h3>}
      </div>
   )
}