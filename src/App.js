import React from 'react';
import ProductList from './components/ProductList';
import Formulario from './components/Formulario';
import AuthForm from './components/AuthForm';
import Uploader from './components/Uploader';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <h1 className="my-4">Proyecto Examen React + Firebase</h1>
      <AuthForm />
      <ProductList />
      <Formulario />
      <Uploader />
    </div>
  );
}

export default App;
