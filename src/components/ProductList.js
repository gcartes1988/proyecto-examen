// Importamos React y el hook useState para manejar el estado local
import React, { useState } from 'react';

// Importamos el componente hijo que representa cada producto
import ProductItem from './ProductItem';

// Componente funcional que contiene la lógica y vista del catálogo de productos
const ProductList = () => {
  // Lista fija de productos simulados
  const productos = [
    { id: 1, nombre: 'Polera React', precio: 10000 },
    { id: 2, nombre: 'Hoodie Firebase', precio: 25000 },
    { id: 3, nombre: 'Gorro JS', precio: 5000 }
  ];

  // Estado para el carrito de compras, inicia como un arreglo vacío
  const [carrito, setCarrito] = useState([]);

  // Función que se ejecuta al hacer clic en "Agregar", actualiza el carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div className="container">
      {/* Título principal del catálogo */}
      <h2>Catálogo</h2>

      {/* Contenedor para los productos, organizado en una fila */}
      <div className="row">
        {/* Renderizamos un ProductItem por cada producto usando map */}
        {productos.map(p => (
          <ProductItem 
            key={p.id}            // Clave única por producto
            producto={p}          // Producto actual
            onAgregar={agregarAlCarrito}  // Callback para agregar al carrito
          />
        ))}
      </div>

      {/* Indicador del total de productos en el carrito */}
      <h4 className="mt-4">Carrito: {carrito.length} productos</h4>
    </div>
  );
};

// Exportamos el componente para ser utilizado en App.js
export default ProductList;
