function Card(props) {
    return(
        <div className="">
            <div className=" h-[180px] flex relative ">
                <img className="w-[120px]" src={props.img} 
                alt={props.tituloalt}/>
                <p className="text-[10px] rotate-90 w-[180px] absolute left-[40px] top-21">{props.cargo}</p>
            </div>
            <p className="text-[12px] font-semibold pb-10">{props.nombre}</p>
           
 
        </div>
    )
    
}
export default Card;