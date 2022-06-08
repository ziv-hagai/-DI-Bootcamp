import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AppContext } from "../App";

export const Aut = (props) => {
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();
    const { accessToken, setAccessToken } = useContext(AppContext);

    useEffect(() => {
        const verify = async () => {
            console.log(accessToken);
            try {
                const response = await axios.get('/token', {
                    withCredentials: true,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                        'x-access-token': accessToken
                    }
                });
                setAccessToken(response.data.accessToken)
                setRedirect(true)
            }
            catch (e) {
                navigate('/login')
            }
        }
        verify();
    }, [])

    return (
        redirect ? props.children : null
    )
}