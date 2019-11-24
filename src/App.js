import React from 'react';
import Navbar from "./components/NavBar"
import Contacts from "./components/Contacts"
import Profile from './components/Profile';
import './App.css';
import PostContainer from './components/PostContainer';


function App() {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <Contacts/>
      <PostContainer/>
    </div>
  );
}

    

export default App;
