import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Estadisticas from "./Estadisticas";
import Contacto from "./Contacto"
import Persona from "./Persona";
import Layout from "./Layout"
import './App.css';
import { MyContext } from "./MyContext.js";
import { useState } from "react";

function App() {
  const [personitas, setPersonitas] = useState([]);

  return (
    <MyContext.Provider value={{ personitas, setPersonitas }}>
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
    </MyContext.Provider>
  );
}

export default App;
