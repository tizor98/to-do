import React from "react"
import Todo from "./Todo"

export default function TaskList(props) {
   
   const { list, setList } = props

   const drawTodo = list.map( todo => <Todo key={todo.id} data={todo} />)
   
   return (
      <React.Fragment>
         {list.length ? drawTodo : 'There is not ToDos yet'}
      </React.Fragment>
   )
}