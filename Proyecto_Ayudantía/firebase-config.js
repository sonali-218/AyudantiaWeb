// ============================================
// 🔥 CONFIGURACIÓN DE FIREBASE
// ============================================
// Este archivo conecta tu HTML con Firebase
// Solo necesitas configurarlo UNA VEZ

// 1️⃣ Importar las funciones de Firebase desde CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// 2️⃣ Tu configuración de Firebase (obtenida desde Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyCsoAXkfT78XfzZ4MVeWNZdwBfqNBGGwNc",
  authDomain: "sistemaescolar-886f1.firebaseapp.com",
  projectId: "sistemaescolar-886f1",
  storageBucket: "sistemaescolar-886f1.appspot.com",
  messagingSenderId: "725294706321",
  appId: "1:725294706321:web:e58ffca02079c09b131930",
  measurementId: "G-JJJR5B3RQH"
};

// 3️⃣ Inicializar Firebase con tu configuración
const app = initializeApp(firebaseConfig);

// 4️⃣ Obtener servicios de Firebase
const analytics = getAnalytics(app); // Para estadísticas (opcional)
const db = getFirestore(app); // Para la base de datos Firestore

// 5️⃣ Exportar para usar en otros archivos JavaScript
export { app, analytics, db };
