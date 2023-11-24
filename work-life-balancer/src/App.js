import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Time from './Components/Time';
import BreakCounterPage from './Pages/BreakCounterPage';
import Body from './Components/Body';
import Header from './Components/Header';
import Login from './Pages/Login';


function App() {
  return (
    <Router>

          
      <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/dashboard" element={<Dashboard />} />

            <Route path="/break" element={<BreakCounterPage />} />
        
      </Routes>
     
  </Router>
  );
}

export default App;
