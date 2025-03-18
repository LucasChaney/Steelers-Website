import React, {useState} from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import AccountPage from './components/AccountPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState("");

  return (
      <BrowserRouter>
          <Navbar isLoggedIn={isLoggedIn}/>
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} userId={userId}/>} />
          <Route path="/AboutPage" element={<AboutPage isLoggedIn={isLoggedIn}/>} />
          <Route path="/AccountPage" element={<AccountPage isLoggedIn={isLoggedIn} userId={userId}/>} />
          <Route path="/RegisterPage" element={<RegisterPage isLoggedIn={isLoggedIn}/>} />
          <Route path="/LoginPage" element= {<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userId={userId} setUserId={setUserId}/>} />
          <Route path="/Logout" element= {<Logout setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;