import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CartProvider } from "./context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
