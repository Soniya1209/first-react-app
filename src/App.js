import { useState } from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  const [name, setName] = useState("Soniya");

  return (
    <div className="App">
          <h1>Class Component</h1>
          <ClassComponent></ClassComponent>
          <h1>Functional Component</h1>
          <FunctionalComponent  name={name} setName={setName} age={23}/>
    </div>
  );
}

export default App;
