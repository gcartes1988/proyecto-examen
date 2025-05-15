import React, { useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
  const productos = [
    { id: 1, nombre: 'Polera React', precio: 10000 },
    { id: 2, nombre: 'Hoodie Firebase', precio: 25000 },
    { id: 3, nombre: 'Gorro JS', precio: 5000 }
  ];

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div className="container">
      <h2>Catálogo</h2>
      <div className="row">
        {productos.map(p => (
          <ProductItem key={p.id} producto={p} onAgregar={agregarAlCarrito} />
        ))}
      </div>
      <h4 className="mt-4">Carrito: {carrito.length} productos</h4>
    </div>
  );
};

export default ProductList;
