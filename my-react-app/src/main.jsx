// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import Product from "./Prodcut.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from './App.jsx'
import Welcome from "./MyApp.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*<App/>*/}
    <Welcome name="MF" />
    <Product productName="Laptop" price={800} />
  </StrictMode>,
);
