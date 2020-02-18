import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route,BrowserRouter} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import News from "./components/News/News";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-component'}>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/friends'} component={Friends}/>
                    <Route path={'/messages'} component={Dialogs}/>
                    <Route path={'/news'} component={News}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;
