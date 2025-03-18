import React from "react";
import '../css/navbar.css'
import {Link} from "react-router-dom";

function Navbar({isLoggedIn}){
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                     <Link className="navbar-brand" to="/"><img src="/images/steelers-logo.png"
                                                              alt="Pistsburgh Steelers NFL Team Logo" style={{
                        height: '30px',
                        width: '30px',
                        marginTop: '-5px'
                    }} /> </Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/AboutPage">About</Link></li>
                        {!isLoggedIn && (
                                <li><Link to="/RegisterPage">Registration</Link></li>
                        )}
                        {isLoggedIn && (
                                <li><Link to="/AccountPage">Account</Link></li>
                        )}
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        {!isLoggedIn && (
                                <li><Link to="/LoginPage"><span
                                    className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                        )}
                        {isLoggedIn && (
                                <li><Link to="/Logout"><span
                                    className="glyphicon glyphicon-log-in"></span> Logout</Link></li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;