import React, { Component } from 'react';
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import Landing from "./pages/Landing/Landing"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';


function App() {

  return (

    <BrowserRouter>
      
      <div className="App">
       
        <Switch>
            <Route exact path="/" component={Landing}/> 
            <Route exact path="/home" component={Home}/> 
            <Route exact path="/Projects"  component={Projects}  />     
            <Route exact path="/Contact" component={Contact}  />
          </Switch>
      </div>
     
    </BrowserRouter>
  )
}


export default App;
