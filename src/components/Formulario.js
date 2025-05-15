import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { db } from '../firebaseConfig';

const Formulario = () => {
  const [form, setForm] = useState({ nombre: '', email: '' });
  const validator = useRef(new SimpleReactValidator());

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    validator.current.showMessageFor(e.target.name);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validator.current.allValid()) {
      db.collection('usuarios').add({ ...form, fecha: new Date() })
        .then(() => alert('Datos guardados'))
        .catch(err => console.error('Error:', err));
      setForm({ nombre: '', email: '' });
    } else {
      validator.current.showMessages();
    }
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <input
        name="nombre"
        className="form-control mb-2"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
      />
      {validator.current.message('nombre', form.nombre, 'required|alpha')}

      <input
        name="email"
        className="form-control mb-2"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      {validator.current.message('email', form.email, 'required|email')}

      <button className="btn btn-success">Enviar</button>
    </form>
  );
};

export default Formulario;
