import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() { 
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/hello" element={<h1>Hello</h1>} />
  
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;