
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

try {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    throw new Error("Failed to find the root element");
  }
  
  createRoot(rootElement).render(<App />);
  
  console.log("Application successfully mounted");
} catch (error) {
  console.error("Failed to render application:", error);
}
