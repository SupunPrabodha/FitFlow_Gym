import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Components/Feedback/Feedback";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='mainhome' element={<Home/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
