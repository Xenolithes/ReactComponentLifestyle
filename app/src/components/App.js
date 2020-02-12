import React from 'react';
import Lifecycle from './Lifecycle/Lifecycle'
import empirestrikesback from './Lifecycle/pictures/empirestrikesback.jpg'


function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Lifecycle expression={"Hello from App"} imgURL={empirestrikesback} />
    </div>
  );
}

export default App;
