// Importamos React y el hook useState para gestionar estados locales
import React, { useState } from 'react';
// Importamos el servicio de almacenamiento desde Firebase
import { storage } from '../firebaseConfig';

// Componente funcional que permite subir archivos a Firebase Storage
const Uploader = () => {
  // Estado para almacenar el archivo seleccionado por el usuario
  const [archivo, setArchivo] = useState(null);
  // Estado para guardar la URL de descarga del archivo una vez subido
  const [url, setUrl] = useState('');
  // Estado para mostrar un indicador de carga mientras se sube el archivo
  const [subiendo, setSubiendo] = useState(false);

  // Maneja el evento cuando el usuario selecciona un archivo
  const handleFileChange = e => {
    setArchivo(e.target.files[0]); // Se almacena el archivo en el estado
  };

  // Función que se ejecuta al presionar el botón "Subir"
  const handleUpload = () => {
    if (!archivo) return alert('Debes seleccionar un archivo'); // Validación básica

    setSubiendo(true); // Indicamos que se inició la subida

    // Creamos una referencia en Firebase Storage donde se guardará el archivo
    const ref = storage.ref(`uploads/${archivo.name}`);

    // Subimos el archivo usando el método put()
    ref.put(archivo)
      .then(() => ref.getDownloadURL()) // Obtenemos la URL del archivo
      .then(urlDescarga => {
        setUrl(urlDescarga);      // Guardamos la URL en el estado
        setSubiendo(false);       // Finaliza la carga
        alert('Archivo subido correctamente');
      })
      .catch(err => {
        console.error('Error al subir:', err); // Captura de errores
        setSubiendo(false); // Finaliza la carga aunque haya error
      });
  };

  return (
    <div className="mt-4 p-4 border">
      <h4>Subir archivo a Firebase Storage</h4>

      {/* Input para seleccionar el archivo desde el computador */}
      <input type="file" onChange={handleFileChange} className="form-control mb-2" />

      {/* Botón que lanza el proceso de subida */}
      <button onClick={handleUpload} className="btn btn-primary mb-2" disabled={subiendo}>
        {subiendo ? 'Subiendo...' : 'Subir'}
      </button>

      {/* Si hay una URL disponible, se muestra el enlace al archivo */}
      {url && (
        <div>
          <p>Archivo disponible en:</p>
          <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        </div>
      )}
    </div>
  );
};

// Exportamos el componente para usarlo en App.js
export default Uploader;
