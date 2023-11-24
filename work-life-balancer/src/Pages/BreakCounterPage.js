
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
const BreakCounterPage = () => {
    const navigate = useNavigate();

  const [timer, setTimer] = useState(12); // 20 minutes in seconds
  const [backgroundColor, setBackgroundColor] = useState('green');
  const [audio] = useState(new Audio('/beep-06.mp3')); // Replace 'beep.mp3' with the path to your audio file
  const [message, setMessage] = useState('');
  const [message1, setMessage1] = useState('');



  useEffect(() => {
    setMessage1("Break CountDown !")
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
      

    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setBackgroundColor('red');
      
      setMessage('Break Time Over. Resume Your Work');

    }
  }, [timer, audio]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const handleStartTime = () => {

    navigate('/dashboard');
    
  };
  return (
    
    <div style={{ backgroundColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    
    <div>
    {message ? (
        <div>
          <h1 style={{ color: 'white' }}>{message}</h1>
          <button onClick={handleStartTime}>Resume Work </button>

          </div>
        ) : (
          <div>
            <h1 style={{ color: 'white' }}>{message1}</h1>
             <h1 style={{ color: 'white' }}>{`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</h1>
             </div>
            
         
        )}    </div>
    <div></div>
  </div>
  )
}

export default BreakCounterPage
