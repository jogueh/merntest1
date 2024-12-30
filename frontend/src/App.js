import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import ItemList from './components/ItemList'; 

const App = () => { 

  return ( 

    <div className="App"> 

      <h1>Welcome to MERN Stack App</h1> 

      <ItemList /> 

    </div> 

  ); 

}; 

  

export default App; 