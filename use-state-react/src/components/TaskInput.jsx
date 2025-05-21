import React from 'react'

export default function TaskInput(props) {

  const handleSubmit = (e) => {
    //evita que el form se actualice
    e.preventDefault() 
    // extrae los datos del formulario
    const formdata = new FormData(e.target) 

    //crea una nueva tarea para posteriormente agregarla a la lista de tareas
    let newTask = { 
      id: 8,
      text: formdata.get('item-input')

    }
    //toma los promps que se envian de la app 
    const items= props.items //lista actual de tareas
    const setItems = props.setItems //funcion para actualizar lista
    
    //copia todas los elementos existentes incluyendo la nueva lista
    setItems([...items, newTask])
    //limpia el formulario
    e.target.reset()

  }

  //formulario que se muestra en pantalla
  return (
    <div>
       <form className="input-section"  onSubmit={handleSubmit}>
            <input type="text" 
            id="item-input"
            placeholder="Enter item text..."
            name='item-input'
           
            />

            <button className="btn btn-add" 
            id="add-btn"
            type='submit'>Add Item</button>

            <button className="btn btn-clear" 
            id="clear-btn" 
            type='button'>Clear All</button>
        </form>
      
    </div>
  )
}
