import React from 'react';

import logo from './logo.svg';
import './App.css';
import Loader from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.css"

function sayHello(){
  console.log("Hello")
}

const Header = () => {
  return <h3>Click the button!</h3>;
}

class Button extends React.Component{
  render(){
    return <button onKeyDown onClick={sayHello}> Click me! </button>
  } 
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hi sweetty!🥰
        </h1>
        <p>
          This page is under development, please come back later
          <Loader
      className="loader"
        type="Watch"
        color="#00BFFF"
        height={100}
        width={100} 
      />
        </p>
        <hr className="separator"/>
        <Header />
        <Button />
      </header>
      
    </div>
  );
}

export default App;
