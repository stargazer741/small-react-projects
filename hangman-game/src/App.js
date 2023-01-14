import React from "react";
import { Header } from "./components/Header";
import { Figure } from "./components/Figure";
function App() {
  return (
    <div className="App">
      <>
        <Header />
        <div className="game-container">
         <Figure />
        </div>
      </>
    </div>
  );
}

export default App;
