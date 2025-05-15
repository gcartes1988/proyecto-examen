
# Proyecto Examen React + Firebase

Este proyecto es la entrega final del ramo de Programación React en Iplacex. La aplicación fue desarrollada en ReactJS e integra servicios de Firebase como Firestore, Authentication y Storage. Además, fue compilada como APK para su ejecución en dispositivos móviles usando Cordova y Android Studio.

## 👨‍💻 Autor
**Gustavo Cartes**  
GitHub: [gcartes1988](https://github.com/gcartes1988)

## 🚀 Tecnologías Usadas
- ReactJS
- Firebase (Auth, Firestore, Storage)
- Bootstrap
- Simple React Validator
- React Router DOM
- Cordova (APK Android)
- Android SDK + Gradle

## 🔧 Funcionalidades
### Ejercicio 1 – Componentes y comunicación:
- Componente Padre: Catálogo de productos.
- Componente Hijo: Cada producto con botón "Agregar".
- Comunicación padre-hijo usando `props` y `callbacks`.
- Uso de `map()` y manejo de `state` para actualizar carrito.

### Ejercicio 2 – Formulario y Firestore:
- Formulario con campos `nombre` y `email`.
- Validación con `simple-react-validator`.
- Datos guardados en Firebase Firestore.

### Ejercicio 3 – Estilo, Auth y APK:
- Interfaz estilizada con Bootstrap.
- Registro/Login con Firebase Authentication.
- Subida de archivos a Firebase Storage.
- Proyecto compilado con Cordova a APK y firmado correctamente.
- Aplicación probada exitosamente en dispositivo Android.

## 📦 Instalación y ejecución local

```bash
git clone https://github.com/gcartes1988/proyecto-examen.git
cd proyecto-examen
npm install
npm start
```

## 📲 Instalación APK
El archivo APK firmado se encuentra en la raíz como `app-release-signed.apk`. Puede ser instalado en cualquier dispositivo Android.

## 🌐 Versión Web
Aplicación desplegada en Netlify: [https://proyecto-examen-react.netlify.app/]

## 🧪 Capturas
- Registro y login exitoso ✔️
- Subida de archivos a Firebase Storage ✔️
- Pruebas de formulario y Firestore ✔️
- Aplicación probada en Android ✔️

## 📁 Estructura del Proyecto
```
proyecto-examen/
├── public/
├── src/
│   ├── components/
│   │   ├── AuthForm.js
│   │   ├── Formulario.js
│   │   ├── ProductItem.js
│   │   ├── ProductList.js
│   │   └── Uploader.js
│   ├── firebaseConfig.js
│   └── App.js
├── build/  # Generado para producción
├── cordova/ 
└── app-release-signed.apk
```

## ✅ Estado Final
✅ Funcional en web y APK móvil.  
✅ Todos los ejercicios implementados.  
✅ Proyecto completo y documentado.

---

© 2025 Gustavo Cartes | Iplacex
