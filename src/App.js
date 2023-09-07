import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/FirstPage";
import SecondStep from "./pages/SecondPage";
import FinalPage from "./pages/FinalPage";

function App() {
  return (
          <div>
        <Routes>
          <Route exact path="/safari-ext-helper" element={ <Home />}/>
          <Route path="/safari-ext-helper/secondStep" element={<SecondStep />}/>
            <Route path='/safari-ext-helper/finalPage' element={<FinalPage />}/>
        </Routes>
          </div>
  );
}

export default App;
