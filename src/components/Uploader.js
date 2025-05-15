import React, { useState } from 'react';
import { storage } from '../firebaseConfig';

const Uploader = () => {
  const [archivo, setArchivo] = useState(null);
  const [url, setUrl] = useState('');
  const [subiendo, setSubiendo] = useState(false);

  const handleFileChange = e => {
    setArchivo(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!archivo) return alert('Debes seleccionar un archivo');
    setSubiendo(true);

    const ref = storage.ref(`uploads/${archivo.name}`);
    ref.put(archivo)
      .then(() => ref.getDownloadURL())
      .then(urlDescarga => {
        setUrl(urlDescarga);
        setSubiendo(false);
        alert('Archivo subido correctamente');
      })
      .catch(err => {
        console.error('Error al subir:', err);
        setSubiendo(false);
      });
  };

  return (
    <div className="mt-4 p-4 border">
      <h4>Subir archivo a Firebase Storage</h4>
      <input type="file" onChange={handleFileChange} className="form-control mb-2" />
      <button onClick={handleUpload} className="btn btn-primary mb-2" disabled={subiendo}>
        {subiendo ? 'Subiendo...' : 'Subir'}
      </button>
      {url && (
        <div>
          <p>Archivo disponible en:</p>
          <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        </div>
      )}
    </div>
  );
};

export default Uploader;
