import React, { useState, useEffect } from 'react';

const BreakAlertModal = ({ visible, onYes, onNo }) => {
    const modalStyle = {
        display: visible ? 'block' : 'none',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '50px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        zIndex: 999,
        
      };
    
    if (!visible) {
        return null;
      }
    
  return (
    <div style={modalStyle}>
    <p>Take a break?</p>
    <button onClick={onYes}>Yes</button>
    <button onClick={onNo}>No</button>
  </div>
  )
}

export default BreakAlertModal
