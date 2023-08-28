import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Estadisticas from "./Estadisticas";
import Contacto from "./Contacto"
import Persona from "./Persona";
import Layout from "./Layout"
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/persona/:personaId" element={<Persona />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/estadisticas" element={<Estadisticas />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="*" element={<h1>404</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
