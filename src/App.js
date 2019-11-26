import React from 'react';
import Navbar from "./components/NavBar"
import Contacts from "./components/Contacts"
import Profile from './components/Profile';
import PostContainer from './components/PostContainer';
import './App.css';


function App() {
  return (
    <div className = "App">
      <Navbar/>
      <Profile/>
      <Contacts/>
      <PostContainer/>
    </div>
  );
}

    

export default App;
