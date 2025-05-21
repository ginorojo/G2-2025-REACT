import React from 'react';
import './App.css';
import Card from './components/Card.jsx';

function App() {
  const data = [
    {
      nombre: "Samsung Galaxy A56 5G 256 Gb Negro",
      precio_actual: "S/ 1.699",
      precio_anterior: "S/ 1.899",
      descuento: "10%",
      cuotas: "12 cuotas de S/ 141,58",
      envio_gratis: true
    },
    {
      nombre: "Apple iPhone 13 (128 Gb) - Blanco Estelar",
      precio_actual: "S/ 1.979",
      precio_anterior: "S/ 3.169",
      descuento: "37%",
      cuotas: "6 cuotas de S/ 329,83",
      envio_gratis: true
    },
    {
      nombre: "Apple iPhone 12 (128 Gb) - Blanco",
      precio_actual: "S/ 2.799",
      precio_anterior: null,
      descuento: null,
      cuotas: "12 cuotas de S/ 233,25",
      envio_gratis: true
    },
    {
      nombre: "Xiaomi Poco X7 Pro 5G Dual Sim 512 Gb Negro",
      precio_actual: "S/ 1.413",
      precio_anterior: "S/ 2.356",
      descuento: "40%",
      cuotas: "6 cuotas de S/ 235,66",
      envio_gratis: true
    }
  ];

  return (
    <div className="app-container">
      <h1 className="text-2xl font-bold my-4 text-center">Catálogo de Teléfonos</h1>

      {data.map((cel, index) => (
        <Card
          key={index}
          img="/aple.avif" // Imagen por defecto
          titulo={cel.nombre}
          precio_actual={cel.precio_actual}
          precio_anterior={cel.precio_anterior || "—"}
          decuento={cel.descuento || ""}
          cuotas={cel.cuotas}
          envio={cel.envio_gratis ? "Envío gratis" : "Con costo de envío"}
        />
      ))}
    </div>
  );
}

export default App;
