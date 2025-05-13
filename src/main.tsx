
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
  // Display a visible error message on the page
  const errorElement = document.createElement("div");
  errorElement.style.padding = "20px";
  errorElement.style.margin = "20px";
  errorElement.style.backgroundColor = "#ffeeee";
  errorElement.style.border = "1px solid #ff0000";
  errorElement.style.borderRadius = "5px";
  errorElement.innerHTML = `<h2>Application Error</h2><p>${error instanceof Error ? error.message : String(error)}</p>`;
  document.body.appendChild(errorElement);
}
