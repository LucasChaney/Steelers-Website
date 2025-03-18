import React, {useState} from 'react';
import '../css/Login.css';
import {useNavigate} from 'react-router-dom';




function LoginPage({isLoggedIn , setIsLoggedIn,userId,setUserId}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleLogin = async (event) => {
        event.preventDefault();
        console.log("TEST")

        if (userName === "" || password === "") {
            alert("Empty username or password");
        } else {
            console.log(`Username: ${userName} Password: ${password}`);
            const response = await fetch('http://localhost:8080/LoginPage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userName, password})
            });
            const status = response.status;
            const responseJSON = await response.json()
            console.log(status);
            console.log('responseJson', responseJSON.id);
            if (status === 200) {
                setIsLoggedIn(true);
                setUserId(responseJSON.id);
                navigate('/')
            } else {
                alert('Incorrect credentials');
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="container">
                    <label htmlFor="username"><b>Username:</b></label>
                    <input
                        name="username"
                        autoComplete="username"
                        type="text"
                        placeholder="Enter Username"
                        id="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />

                    <label htmlFor="password"><b>Password:</b></label>
                    <input
                        name="password"
                        autoComplete="current-password"
                        type="password"
                        placeholder="Enter Password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="btn btn-submit">Submit</button>
                </div>

                <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                    <button type="reset" className="resetbtn">Reset</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;