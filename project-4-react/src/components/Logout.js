import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Logout({setIsLoggedIn}) {
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoggedIn(false);
        navigate('/');
    }, [setIsLoggedIn, navigate]);

    return null;
}

export default Logout;