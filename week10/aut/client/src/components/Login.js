import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

    useEffect(() => {
        setMsg('')
    }, [])

    const handleAction = (id) => {
        if (id === 'Register') {

        } else if (id === 'Login') {

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