import React from 'react';

function Card(props) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden m-4 border border-gray-200">
      <img
        src={props.img}
        alt={props.titulo}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-left">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{props.titulo}</h2>
        <p className="text-sm text-gray-500 line-through">Precio anterior: {props.precio_anterior}</p>
        <p className="text-lg font-bold text-green-600">Precio actual: {props.precio_actual}</p>
        <p className="text-sm text-red-500">Descuento: {props.decuento}</p>
        <p className="text-sm text-gray-700">Cuotas: {props.cuotas}</p>
        <p className="text-sm text-blue-500">{props.envio}</p>
      </div>
    </div>
  );
}

export default Card;
