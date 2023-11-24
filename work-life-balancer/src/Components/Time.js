import React, { useState, useEffect } from 'react';
import BreakAlertModal from './BreakAlertModal';
import FeedBackModal from './FeedBackModal';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
const TimeDisplay = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [whr, setWhr] = useState(null);
  const [bmin, setbmin] = useState(null);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showFeedModal, setShowFeedModal] = useState(false);
  const [Uid, setUid] = useState();
  const [Tid, setTid] = useState();
  const [flag,setFlag]= useState(false);
  useEffect(() => { 
    axios.post('http://localhost:3001/fetchTid', {
      
  })
  .then(response => {
    sessionStorage.setItem('Tid',response.data.tid)
   
    
      
  })
  .catch(error => {
      console.log(error);
  });
    setStartTime(sessionStorage.getItem("sTime"));
    setUid(sessionStorage.getItem("id"));
    setTid(sessionStorage.getItem("Tid"));
    console.log("tid is ",Tid);
    const name = sessionStorage.getItem("name");
  
    // This Use effects iused for fetching the time
      const interval = setInterval(() => {
      setCurrentTime(new Date());
      }, 10);
      const intervalId = setInterval(() => {
        setShowAlertModal(true);
      }, 36000);

    return () => clearInterval(interval);
  }, []);


  //-------FUNCTION WHICH INVOKES THE POPUP FOR BREAK
  const popUpAlertBreak = ()=>{
    if(flag){
      const intervalId = setInterval(() => {

       
        setShowAlertModal(true);
        
      }, 36000); // 1 hour in milliseconds
    }
   
  }



// Gives the Formatted Time
  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true, // Use 12-hour format
  });
  // this fucntion deals with the setting of the start time
  const handleStartTime = () => {
    //axios code to init the tracker for the user
    axios.post('http://localhost:3001/initUser', {
      Uid:Uid
    })
    .then(response => {
      console.log("Init user API call sucess")
    })
    .catch(error => {
        console.log(error);
    });
 
    

    sessionStorage.setItem("sTime",formattedTime);
    setStartTime(formattedTime);
    setFlag(true);
    //This FUCNTION is to pop up alert to take a break
    popUpAlertBreak();
 
   
  
    
  };
 

  // handles the Alert Modal Window
  // if the chossed function is YES
  const handleModalYes = () => {

    // Axios Request to increment the number of working hrs
    axios.post('http://localhost:3001/updateData', {
    Tid:Tid
  })
  .then(response => {
    
      navigate('/break');
      
  })
  .catch(error => {
      console.log(error);
  });
    
  };
  // if the Chjoosed button is NO
  const handleModalNo = () => {
    // Continue on the same page
    setShowAlertModal(false);
  };

  //Handles the End Work Button
  const handleEndTime = () => {
    setShowFeedModal(true);
    //axios code to get the data
    axios.post('http://localhost:3001/endTime', {
      Tid:Tid
    })
    .then(response => {
      
      setWhr(response.data.whr);
      setbmin(response.data.bmin);
      
        
    })
    .catch(error => {
        console.log(error);
    });

    //This code send the end time to db
    setFlag(false);
    setEndTime(formattedTime);
    setShowAlertModal(false);
    //Request to fetch the No of working hrs and No of break minutes
    setShowFeedModal(true);
    
      

  };
  return (
    <div>
      
      <h2>Its {formattedTime} Now !</h2>
      <h3> Keep Rocking !!</h3>
      <button onClick={handleStartTime}>Start Work {startTime && <h2>Starting Time: {startTime}</h2>}</button>
      
      <button onClick={handleEndTime}>End Work {endTime && <h2>Ending Time: {endTime}</h2>} </button>
      
      <BreakAlertModal visible={showAlertModal} onYes={handleModalYes} onNo={handleModalNo} />
      <FeedBackModal visible={showFeedModal} hrsOfWork={whr} hrsOfBreak={bmin} />
    </div>
  );
};

export default TimeDisplay;
