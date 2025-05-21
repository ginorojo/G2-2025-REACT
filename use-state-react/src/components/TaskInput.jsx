import React from 'react'

export default function TaskInput({items, setItems}) {

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
