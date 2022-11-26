import './App.css';
import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './components/About';
import Slides from './components/Slides';
import Adopt from './components/Adopt';
import Bottom from './components/Bottom';
import AnimalReg from './components/AnimalReg';
import Login from './components/Login';
import Signup from './components/Signup';
import { createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
});

function Adoptpage () {
  return (<div>
            <Adopt/>
            <Slides/>
          </div>);
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" exact element={
          <About/> }>
        </Route>
        <Route path="/about" exact element={
          <About/> }>
        </Route>
        <Route path="/adopt" exact element={
          <Adoptpage/>}>
        </Route>
        <Route path="/animalregister" exact element={
          <AnimalReg/>}>
        </Route>
      </Routes>
      );
    } else {
      routes = (
      <Routes>
      <Route path="/about" exact element={
          <About/> }>
        </Route>
          <Route path="/" exact element={
          <About/> }>
        </Route>
        <Route path="/adopt" exact element={
          <Adoptpage/> }>
        </Route>
        <Route path="/login" exact element={
          <Login/> }>
        </Route>
        <Route path="/signup" exact element={
          <Signup/> }>
        </Route>
      </Routes>
      );
    }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <Navbar/>
        <main> {routes} </main>
        <Bottom/>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
