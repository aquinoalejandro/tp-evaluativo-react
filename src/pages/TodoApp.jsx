import { useEffect, useState, useContext } from "react"
import { Contexto } from "../context/Contexto.jsx"


export const TodoApp = () => {
  //USO DE USECONTEXT
  const { ultimaTarea, setTarea } = useContext(Contexto)  

    // Lógica para almacenar los todos
    //USO DE USESTATE
      const [todo, TodoState] = useState("")
      const [todoList, setTodoList] = useState([])
    // Lógica para añadir un todo
      const addTodoList=()=>{
        setTodoList([...todoList, todo])
      }
      

      //USO DE USEEFFECT
      useEffect(() => {
        setTarea(todoList[todoList.length - 1])
      }, [todoList])
      const todoAction = ({key}) =>{
        if(key === "Enter" && todo !== ""){
          addTodoList(todo)
        }        
      }
      
      


    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
          <h1>Tareas</h1>
            <h4>Ultima tarea creada: {ultimaTarea}</h4> 
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 ">
            <h3>Tarea nueva</h3>
            <input
              type="text"
              className="form-control"
              placeholder="Añade una nueva tarea"
              name="desc"
              // Evento cuando cambia el valor del input
              onChange={(e) => {
                TodoState(e.target.value)
              }}
              // Evento cuando presiona tecla Enter en ASCII
              onKeyUpCapture={
                  todoAction
                  
              }
            />
          </div>
          <div className="col-sm-12 col-md-8">
            <h3>Lista de Tareas</h3>
            <ul className="list-unstyled">
              {todoList.map((todo, index) => (
            <li className={'list-group-item'} key={index}>
              <span>{todo}</span>
            </li>
          ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  