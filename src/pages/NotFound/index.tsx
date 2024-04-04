import { useEffect } from "react";
import { useNavigate } from "react-router-dom";







export const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 2000);
    
        return () => clearTimeout(timer);
    }, []);

    return(
        <h1 style={{padding:50}}>It's a 404</h1>
    )
}