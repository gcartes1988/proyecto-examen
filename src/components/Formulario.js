// Importamos React y los hooks necesarios
import React, { useState, useRef } from 'react';

// Importamos la librería de validación para formularios
import SimpleReactValidator from 'simple-react-validator';

// Importamos la base de datos de Firebase
import { db } from '../firebaseConfig';

// Componente funcional del formulario
const Formulario = () => {
  // Estado local para los campos del formulario
  const [form, setForm] = useState({ nombre: '', email: '' });

  // Referencia al validador para que persista entre renderizados
  const validator = useRef(new SimpleReactValidator());

  // Función que se ejecuta al cambiar el valor de un campo
  const handleChange = e => {
    // Actualizamos el campo correspondiente del formulario
    setForm({ ...form, [e.target.name]: e.target.value });

    // Mostramos el mensaje de validación para ese campo
    validator.current.showMessageFor(e.target.name);
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = e => {
    e.preventDefault(); // Prevenimos el comportamiento por defecto (recargar la página)

    // Verificamos si todos los campos son válidos
    if (validator.current.allValid()) {
      // Si son válidos, guardamos los datos en Firestore
      db.collection('usuarios').add({ ...form, fecha: new Date() })
        .then(() => alert('Datos guardados')) // Alerta de éxito
        .catch(err => console.error('Error:', err)); // Captura de error

      // Reiniciamos el formulario
      setForm({ nombre: '', email: '' });
    } else {
      // Si no es válido, mostramos todos los mensajes de validación
      validator.current.showMessages();
    }
  };

  return (
    // Formulario estilizado con Bootstrap
    <form className="p-4" onSubmit={handleSubmit}>
      {/* Campo de entrada para el nombre */}
      <input
        name="nombre"
        className="form-control mb-2"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
      />
      {/* Mensaje de validación para el nombre */}
      {validator.current.message('nombre', form.nombre, 'required|alpha')}

      {/* Campo de entrada para el email */}
      <input
        name="email"
        className="form-control mb-2"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      {/* Mensaje de validación para el email */}
      {validator.current.message('email', form.email, 'required|email')}

      {/* Botón de envío del formulario */}
      <button className="btn btn-success">Enviar</button>
    </form>
  );
};

// Exportamos el componente para ser usado en App.js
export default Formulario;
