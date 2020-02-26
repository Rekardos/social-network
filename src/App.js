import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import {Route, BrowserRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {



    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-component'}>
                    <Route path={'/profile'} render={ () => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateText={props.updateText}/>}/>
                    <Route path={'/dialogs'} render={ () => <Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage} updateMessageText={props.updateMessageText}/> }/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;
