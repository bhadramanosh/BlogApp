import { useState, useEffect } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    axios.get("http://localhost:3001/initialData")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching initial data", err);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
