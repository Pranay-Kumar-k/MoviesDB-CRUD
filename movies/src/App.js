import React from "react";
import './App.css';
import SignIn from "./components/authComponents/SignIn";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignIn />
    </div>
  );
}

export default App;
