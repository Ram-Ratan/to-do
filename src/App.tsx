import React from 'react';
import './App.css';
import ToDo from './component/toDo/ToDo';

const App: React.FC = () => {
  return (
    <div className="App">
      <img src='assets/TEYA-Graphic 1.png' alt='graphic-1' className='graphic-1'/>
      <p className='description'>Welcome to Grandma TEYA’s To Do List Creator. Try it out below and get organised.... with a twist.</p>
      <ToDo />
    </div>
  );
}

export default App;
