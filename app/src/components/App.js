import React from 'react';
import Lifecycle from './Lifecycle/Lifecycle'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World
        </p>
      <input></input>
      </header>
      <Lifecycle expression={"Hello from App"} />
    </div>
  );
}

export default App;
