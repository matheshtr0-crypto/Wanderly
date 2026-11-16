import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
// import App from './App.jsx'
// import NewProject from './components/NewProject.jsx'
// import Ecommerce from './components/Ecommerce'
import Travelprjct from './components/Travelprjct'
 



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <App />  */}
    {/* <NewProject /> */}
    {/* <Ecommerce /> */}
    <Travelprjct/>
   </BrowserRouter>
  </StrictMode>
);
