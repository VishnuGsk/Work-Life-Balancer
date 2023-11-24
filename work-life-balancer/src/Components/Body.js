import React, { useState, useEffect } from 'react';
import TimeDisplay from './Time'
import Todo from './Todo'

const Body = () => {
  const [username, setUsername] = useState('Vishnu');

  const Uid = sessionStorage.getItem("id");
  const name = sessionStorage.getItem("name");

  return (
    <div>
      {/* this Displays the time and the buttons for starting and ending of job */}
      <div className="App">
      <h1>Welcome, {name}!</h1>
      <TimeDisplay />
      <Todo />
      </div>
     
      
    </div>
  )
}

export default Body
