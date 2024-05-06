import { useState } from 'react';
import './App.css';
import ClassComponent from './pages/ClassComponent';
import FunctionalComponent from './pages/FunctionalComponent';
import {Routes, Route} from 'react-router-dom';
// import BaseHoc from './hoc/BaseHoc';

function App() {
  const [name, setName] = useState("Soniya");

  return (
    <div className="App">
      <Routes>
        <Route path='/functional-component' element={
          <FunctionalComponent  name={name} setName={setName} age={23}/>
        } />

        <Route path='/class-component' element={  <ClassComponent /> } />
      </Routes>
          
    </div>
  );
}

export default App;
