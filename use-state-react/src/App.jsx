import React, { useState } from 'react'
import TaskItem from './components/TaskItem'
import TaskInput from './components/TaskInput'
// rfc

export default function App(props) {
  // se crea el estado que contiene la funcion que actualiza los items en el dom
  //se usa el useState para almacenar los datos
  const [items, setItems ] = useState(tasks)

  return (
    <div className="container">
        <h1>DOM Manipulation Project</h1>

        //mostramso el formulario, y le pasamos las tareas 
        <TaskInput
        items={items} //lista de tareas
        setItems= {setItems} //actualiza las tareas
        />
        <ul className="items-container" id="items-list">


          //se itera para repetir la plantilla
          {
            items.map((task)=>{
              return(
               <TaskItem       //se entrega el nombre de el componente
                text={task.text}
                id={task.id}
                  />
        
             ) })
          }
         
            {/* <li className="empty-list">No items added yet. Add a new item above!</li>  */}
        </ul>
    </div>

  )
}

//array con datos
 let tasks = [
    {
      id: 1,
      text: "Jorge sosa"
    },
    {
      id: 2,
      text: "Milton Morales"
    }
  ]