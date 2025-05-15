// Importamos React para poder crear componentes
import React from 'react';

// Componente funcional ProductItem que recibe props: producto y onAgregar
const ProductItem = ({ producto, onAgregar }) => (
  // Contenedor con estilos de tarjeta de Bootstrap
  <div className="card m-2">
    <div className="card-body">
      {/* Nombre del producto */}
      <h5 className="card-title">{producto.nombre}</h5>

      {/* Precio del producto */}
      <p className="card-text">Precio: ${producto.precio}</p>

      {/* Botón que llama a la función onAgregar pasando el producto como argumento */}
      <button className="btn btn-primary" onClick={() => onAgregar(producto)}>
        Agregar
      </button>
    </div>
  </div>
);

// Exportamos el componente para ser usado en otros componentes como ProductList
export default ProductItem;
