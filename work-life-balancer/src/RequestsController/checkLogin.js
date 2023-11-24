
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const checkLogin =(username,password)=>{
    const navigate = useNavigate;
    axios.post('http://localhost:3001/login', {
        username:username,
        password:password
    })
    .then(response => {
      
        if(response.data.sucess){
            console.log(username)
            navigate('/dashboard')
        };
        
    })
    .catch(error => {
        console.log(error);
    });
      console.log('Logging in with:', username, password);
 }

export default checkLogin