import React, { useState } from 'react';
import { auth } from '../firebaseConfig';

const AuthForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [modo, setModo] = useState('login'); // 'login' o 'register'

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (modo === 'register') {
      auth.createUserWithEmailAndPassword(form.email, form.password)
        .then(user => alert('Usuario registrado'))
        .catch(err => alert('Error: ' + err.message));
    } else {
      auth.signInWithEmailAndPassword(form.email, form.password)
        .then(user => alert('Sesión iniciada'))
        .catch(err => alert('Error: ' + err.message));
    }
  };

  return (
    <div className="p-4 border mt-4">
      <h4>{modo === 'login' ? 'Iniciar Sesión' : 'Registrar Usuario'}</h4>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          className="form-control mb-2"
          placeholder="Correo"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          className="form-control mb-2"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
        />
        <button className="btn btn-primary w-100 mb-2">
          {modo === 'login' ? 'Ingresar' : 'Registrar'}
        </button>
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

export default AuthForm;
