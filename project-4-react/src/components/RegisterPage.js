import React, {useState} from 'react';
import '../css/Register.css'
import {useNavigate} from "react-router-dom";

function RegisterPage({isLoggedIn , setIsLoggedIn}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");
    const navigate = useNavigate();

    const handleReg = async (event) => {
        event.preventDefault();

        if (userName === "" || password === "") {
            alert("Empty username or password");
        } else if (password !== repassword){
          alert("Password's do not match")
        } else {
            alert(`Username: ${userName} Password: ${password}`)
            const response = await fetch('http://localhost:8080/RegisterPage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userName, password})
            });
            const status = response.status;
            const responseJson = await response.json();
            console.log('responseJson', responseJson);
            if (status === 201) {
                navigate('/LoginPage')
            } else {
                alert('Account already created');
                navigate('/LoginPage')
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleReg}>
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

                    <label htmlFor="repeatpassword"><b>Repeat Password:</b></label>
                    <input
                        name="Repeat Password"
                        autoComplete="current-password"
                        type="password"
                        placeholder="Repeat Password"
                        id="repassword"
                        value={repassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </div>

                <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                    <button type="reset" className="resetbtn">Reset</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;