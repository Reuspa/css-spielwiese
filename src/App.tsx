import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div className="button-wrapper">
          <div className="button"> ... </div>
          <div className="button"> ... </div>
          <div className="button"> ... </div>
          <div className="button"> ... </div>
        </div>
      </div>
    </>
  );
}

export default App;
