import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Navbar/>
      <Article/>
      <Footer/>
    </div>
  );
};

export default App;
