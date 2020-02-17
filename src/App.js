import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Article from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <Article/>
      <Footer/>
    </div>
  );
};

export default App;
