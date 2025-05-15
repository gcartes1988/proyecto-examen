// Importamos React y el hook useState para manejar estado local
import React, { useState } from 'react';
// Importamos el módulo de autenticación desde Firebase
import { auth } from '../firebaseConfig';

// Componente funcional para el formulario de autenticación
const AuthForm = () => {
  // Estado local para manejar los campos del formulario
  const [form, setForm] = useState({ email: '', password: '' });

  // Estado para determinar el modo actual: login o registro
  const [modo, setModo] = useState('login'); // 'login' o 'register'

  // Manejador del cambio de valores de los campos del formulario
  const handleChange = e => {
    // Actualizamos el estado con el nuevo valor del campo
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Manejador del envío del formulario
  const handleSubmit = e => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario (recargar)
    
    if (modo === 'register') {
      // Si el modo es registro, usamos Firebase Auth para crear usuario
      auth.createUserWithEmailAndPassword(form.email, form.password)
        .then(user => alert('Usuario registrado'))
        .catch(err => alert('Error: ' + err.message));
    } else {
      // Si el modo es login, usamos Firebase Auth para iniciar sesión
      auth.signInWithEmailAndPassword(form.email, form.password)
        .then(user => alert('Sesión iniciada'))
        .catch(err => alert('Error: ' + err.message));
    }
  };

  return (
    <div className="p-4 border mt-4">
      {/* Título que cambia según el modo actual */}
      <h4>{modo === 'login' ? 'Iniciar Sesión' : 'Registrar Usuario'}</h4>

      {/* Formulario de autenticación */}
      <form onSubmit={handleSubmit}>
        {/* Campo para ingresar el correo */}
        <input
          name="email"
          type="email"
          className="form-control mb-2"
          placeholder="Correo"
          value={form.email}
          onChange={handleChange}
        />

        {/* Campo para ingresar la contraseña */}
        <input
          name="password"
          type="password"
          className="form-control mb-2"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
        />

        {/* Botón principal del formulario */}
        <button className="btn btn-primary w-100 mb-2">
          {modo === 'login' ? 'Ingresar' : 'Registrar'}
        </button>

        {/* Botón secundario para alternar entre login y registro */}
        <button
          type="button"
          className="btn btn-link"
          onClick={() => setModo(modo === 'login' ? 'register' : 'login')}
        >
          Cambiar a {modo === 'login' ? 'registro' : 'login'}
        </button>
      </form>
    </div>
  );
};

// Exportamos el componente para poder usarlo en App.js
export default AuthForm;
