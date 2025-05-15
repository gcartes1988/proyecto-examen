// Importamos React y los componentes que utilizaremos en nuestra aplicación
import React from 'react';
import ProductList from './components/ProductList';    // Componente que muestra la lista de productos
import Formulario from './components/Formulario';      // Formulario para ingresar datos a Firestore
import AuthForm from './components/AuthForm';          // Formulario de autenticación de usuarios
import Uploader from './components/Uploader';          // Componente para subir archivos a Firebase Storage

// Importamos Bootstrap para los estilos
import 'bootstrap/dist/css/bootstrap.min.css';

// Componente principal de la aplicación
function App() {
  return (
    // Contenedor principal con clases de Bootstrap
    <div className="container">
      <h1 className="my-4">Proyecto Examen React + Firebase</h1>

      {/* Componente para registro e inicio de sesión con Firebase Auth */}
      <AuthForm />

      {/* Componente que muestra productos y permite agregarlos al carrito */}
      <ProductList />

      {/* Formulario que guarda datos en Firestore con validación */}
      <Formulario />

      {/* Componente que permite subir archivos al Storage de Firebase */}
      <Uploader />
    </div>
  );
}

// Exportamos el componente para su uso en index.js
export default App;
