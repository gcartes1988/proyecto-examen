// Importamos solo el núcleo de Firebase
import firebase from 'firebase/app';

// Importamos los servicios que vamos a utilizar: Firestore, Auth y Storage
import 'firebase/firestore'; // Base de datos en tiempo real
import 'firebase/auth'; // Autenticación de usuarios
import 'firebase/storage'; // Almacenamiento de archivos

// Configuración del proyecto obtenida desde Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAXp7Tbr281rp78A4YdlzWDNVj8kgmS6Tg", // Clave de API del proyecto
  authDomain: "proyecto-examen-876a8.firebaseapp.com", // Dominio de autenticación
  projectId: "proyecto-examen-876a8", // ID del proyecto en Firebase
  storageBucket: "proyecto-examen-876a8.firebasestorage.app", // URL del bucket de almacenamiento
  messagingSenderId: "716660872257", // ID del remitente para mensajes push
  appId: "1:716660872257:web:3036d95b7bc7c0c5c2e2c0" // ID único de la app
};

// Inicializamos la app de Firebase con la configuración
firebase.initializeApp(firebaseConfig);

// Exportamos los servicios que vamos a usar en otros componentes
export const db = firebase.firestore(); // Base de datos Firestore
export const auth = firebase.auth(); // Servicio de autenticación
export const storage = firebase.storage(); // Servicio de almacenamiento

// Exportamos Firebase por si se necesita usar directamente
export default firebase;