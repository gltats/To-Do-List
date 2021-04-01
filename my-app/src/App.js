import React from 'react';

import logo from './logo.svg';
import './App.css';

function sayHello(){
  console.log("Hello")
}

const Header = () => {
  return <h1>Click the button!</h1>;
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
          Hi!
        </h1>
        <Header />
        <Button />
      </header>
      
    </div>
  );
}

export default App;
