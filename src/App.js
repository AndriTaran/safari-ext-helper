import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/FirstPage";
import About from "./pages/SecondPage";
import FinalPage from "./pages/FinalPage";

function App() {
  return (
          <div>
        <Routes>
          <Route exact path="/" element={ <Home />}/>
          <Route path="/about" element={<About />}/>
            <Route path='/finalPage' element={<FinalPage />}/>
        </Routes>
          </div>
  );
}

export default App;
