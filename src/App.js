import React from 'react';
import SideMenu from './components/SideMenu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MainBody from './components/MainBody';
function App() {
  return (
    <div className='App'>
      <SideMenu />
      <MainBody />
    </div>
  );
}

export default App;
