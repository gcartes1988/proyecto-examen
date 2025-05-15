import React from 'react';

const ProductItem = ({ producto, onAgregar }) => (
  <div className="card m-2">
    <div className="card-body">
      <h5 className="card-title">{producto.nombre}</h5>
      <p className="card-text">Precio: ${producto.precio}</p>
      <button className="btn btn-primary" onClick={() => onAgregar(producto)}>Agregar</button>
    </div>
  </div>
);

export default ProductItem;
