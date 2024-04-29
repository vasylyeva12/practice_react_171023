import React from 'react';
import SimpleParagraph from './components/simpleParagraph/SimpleParagraph';
import './App.css';

function CustomButton() {
  return (
    <div className="buttonContainer">
      <button className="buttonWidjet">My Custom Button</button>
    </div>
  )
  
}

const App = () => {
  const currentSeason = 'winter';
  return (
    <div className="App">
      <p>Hello World</p>
      <h2>Welcome, guest! {new Date().toLocaleString()}</h2>
        <div>
          <button>Enter</button>
          <button>Register</button>
          <CustomButton />
        </div>
        <p>Now is: {currentSeason}</p>
      
        <SimpleParagraph/>
    </div>
  );
}

export default App;