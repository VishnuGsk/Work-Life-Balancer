import React, { useState } from 'react';
import './Login.css'; // Import your stylesheet
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginBody = () => {

    // intit neccecary variables
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    
    const handleLogin = () => {
        // Implement your login logic here
        // Axios code to Send the credentials to the server and check the authenticity 
        axios.post('http://localhost:3001/login', {
          username:username,
          password:password
      })
      .then(response => {
        
          if(response.data.sucess){
           navigate('/dashboard');
          };
          const id = response.data.id;
          const name = response.data.name;
          sessionStorage.setItem("name",name);
          sessionStorage.setItem("id",id);
          
      })
      .catch(error => {
          console.log(error);
      });
        console.log('Logging in with:', username, password);
      };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username : </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
  
}

export default LoginBody
