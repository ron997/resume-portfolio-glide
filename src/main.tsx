
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

try {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    throw new Error("Failed to find the root element");
  }
  
  // Create a simple loader element
  const loaderElement = document.createElement("div");
  loaderElement.id = "app-loading";
  loaderElement.style.position = "fixed";
  loaderElement.style.top = "0";
  loaderElement.style.left = "0";
  loaderElement.style.width = "100%";
  loaderElement.style.height = "100%";
  loaderElement.style.display = "flex";
  loaderElement.style.alignItems = "center";
  loaderElement.style.justifyContent = "center";
  loaderElement.style.backgroundColor = "#f8f9fa";
  loaderElement.style.zIndex = "9999";
  loaderElement.innerHTML = "<p>Loading portfolio...</p>";
  
  document.body.appendChild(loaderElement);
  
  // Check for module loading issues
  window.addEventListener("error", (event) => {
    if (event.message.includes("Failed to load module script") || 
        event.message.includes("MIME type")) {
      console.error("Module loading error:", event.message);
      showErrorMessage("Failed to load scripts. This may be due to MIME type misconfiguration.");
    }
  });
  
  // Attempt to render the app
  createRoot(rootElement).render(<App />);
  
  // Remove loader on success
  const loader = document.getElementById("app-loading");
  if (loader) {
    loader.style.display = "none";
    setTimeout(() => loader.remove(), 500);
  }
  
  console.log("Application successfully mounted");
} catch (error) {
  console.error("Failed to render application:", error);
  showErrorMessage(error instanceof Error ? error.message : String(error));
}

// Helper function to show error messages
function showErrorMessage(message: string) {
  // Remove existing loader if present
  const loader = document.getElementById("app-loading");
  if (loader) loader.remove();
  
  // Create error element
  const errorElement = document.createElement("div");
  errorElement.style.padding = "20px";
  errorElement.style.margin = "20px";
  errorElement.style.backgroundColor = "#ffeeee";
  errorElement.style.border = "1px solid #ff0000";
  errorElement.style.borderRadius = "5px";
  errorElement.innerHTML = `
    <h2>Application Error</h2>
    <p>${message}</p>
    <div style="margin-top: 15px;">
      <p>Troubleshooting steps:</p>
      <ol style="margin-left: 20px; line-height: 1.5;">
        <li>Try clearing your browser cache and reload</li>
        <li>Check if your browser is up to date</li>
        <li>Try a different browser</li>
        <li>If using a VPN or proxy, try disabling it</li>
      </ol>
    </div>
  `;
  document.body.appendChild(errorElement);
}
