import React from 'react'

export default function Button(props) {
  return (
    <div>
      <Button className='px-2 py-4'style={{color:props.color}}>
        este es un boton{props.contenido} 
      </Button>
    </div>
  )
}
