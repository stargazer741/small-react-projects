import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Employees from './components/Employees';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Header />
    <Employees />
    <Footer />
    </div>
  );
}

export default App;
