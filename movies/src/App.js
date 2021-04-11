import React from "react";
import './App.css';
import SignIn from "./components/authComponents/SignIn";
import Login from "./components/authComponents/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
