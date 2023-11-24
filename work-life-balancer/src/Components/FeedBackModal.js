import React from 'react'

const FeedBackModal = ({visible,hrsOfWork,hrsOfBreak}) => {
    const modalStyle = {
        display: visible ? 'block' : 'none',
        position: 'fixed',
        top: '80%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        zIndex: 999,
      };
    
    if (!visible) {
        return null;
      }
  return (
    <div style={modalStyle}>
        <h1>Summary</h1>
        
        <h2>Total Working Hours : {hrsOfWork}</h2>
        <h2>Total Break Mins : {hrsOfBreak}</h2>
        {/* logot funcionality */}
        {/* <button onClick={logout}>Logout</button> */}
  </div>
  )
}

export default FeedBackModal
