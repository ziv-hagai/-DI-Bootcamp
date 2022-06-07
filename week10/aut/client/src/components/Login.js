import React, { useState, useEffect, useContext } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { AppContext } from '../App';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')
    const navigate = useNavigate()
    const { setAccessToken } = useContext(AppContext)
    useEffect(() => {
        setMsg('')
    }, [])

    const handleAction = async (id) => {
        if (id == 'Register') {
            try {
                let response = await axios.post('/register', {
                    email, password
                }, {
                    withCredentials: true,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                })
                console.log(response.data);
                setMsg(response.data.msg)
            } catch (e) {
                console.log(e);
                setMsg(e.response.data.msg)
            }
        } else if (id == 'Login') {
            try {
                let response = await axios.post('/login', {
                    email, password
                }, {
                    withCredentials: true,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                })
                console.log('login response', response.data);
                setAccessToken(response.data.accessToken)
                navigate('/')
            } catch (e) {
                console.log('login error', e.response.data.msg);
                setMsg(e.response.data.msg)
            }
        }
    }

    return (

        <div>
            <div className='heading-container'>
                <h3>{props.title}</h3>
            </div>
            <Box component='form' sx={{ m: 1 }} noValidate='off'>
                <TextField sx={{ m: 1 }}
                    id='email'
                    label='Enter email'
                    variant='outlined'
                    onChange={(e) => setEmail(e.target.value)} />
                <TextField sx={{ m: 1 }}
                    id='pasword'
                    label='Enter pasword'
                    variant='outlined'
                    onChange={(e) => setPassword(e.target.value)} />
            </Box>
            <Button variant='contained' onClick={() => handleAction(props.title)}>
                {props.title}
            </Button>
            <div>
                {msg}
            </div>
            <div>
                {props.title === 'Register'
                    ? <Link to='/login'>Login</Link>
                    : <Link to='/register'>Register</Link>}
            </div>
        </div>
    )
}

export default Login