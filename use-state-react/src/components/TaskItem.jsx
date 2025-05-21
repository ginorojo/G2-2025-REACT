
export default function TaskItem(props) {
  return (

    //creo la plantilla para lo que se mostrara en el dom
    //uso el promps para reutilizar el codigo y repetirlo
   <li className ="item">
    <span className="item-text">{props.text}</span>
            <div className="item-actions">
                <button className="btn btn-complete" data-id={props.Id}>Complete</button>
                <button className="btn btn-delete" data-id={props.id}>Delete</button>
            </div>

   </li>
  )
}
