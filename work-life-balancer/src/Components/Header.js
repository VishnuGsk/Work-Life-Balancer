import React from 'react'

import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const clearLocalStorage = () => {
    const keys = Object.keys(localStorage);
    keys.forEach(key => localStorage.removeItem(key));
    console.log('Local storage is cleared');
   };
  const clearSessionStorage = () => {
    const keys = Object.keys(sessionStorage);
    keys.forEach(key => sessionStorage.removeItem(key));
    console.log('Session storage is cleared');
   };
   const handleLogout =() =>{
    clearSessionStorage();
    clearLocalStorage();
    navigate('/')

   }
  const headerStyle = {
    backgroundColor: '#5C7BEA', // Blue gradient background
    padding: '30px',
    textAlign: 'center',
    color: '#ffffff', // White font color
    fontSize: '2.5rem', // Larger font size
    
    letterSpacing: '1px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle box shadow
    
  };
  return (
    <div style={headerStyle}>
    V-Work-Life
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="button" onClick={handleLogout} style={{ backgroundColor: 'red', color: 'white' }}>
            LogOut
    </button>
    </div>
   
  </div>
  )
}

export default Header
