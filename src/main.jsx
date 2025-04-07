import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import Spinner from './components/Spinner';
import "bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

// Error boundary global (opcional)
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // Aquí podrías mostrar un modal de error global
});