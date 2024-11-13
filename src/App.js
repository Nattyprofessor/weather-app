import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import WeatherPage from "./WeatherPage";

function App() {
  

  return (
    <div>
      <Router>
      <Navbar />
       <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
      </Router>
          
    </div>
    
  );
}

export default App;