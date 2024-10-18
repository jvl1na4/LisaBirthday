import { useState } from 'react'
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

function LoginComponent() {

    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [open, setOpen] = React.useState(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if(password === "MiauMiau") {
            console.log("gg")
            setOpen(false);
        }else  {
            setMessage("Falsch")
        }
    };


    return (
        <Backdrop
            sx={() => ({
                color: '#fff',
                backgroundColor: 'rgb(255,198,229)'
            })}
                open={open}
            >
            <div>
                <p>passwort:</p>
                <input
                    type="text"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="password"
                    style={{
                        color: '#3c0826',
                        backgroundColor: '#fb99d5',
                        borderColor: '#3c0826',
                    }}
                />

                <button onClick={handleLogin}>Login</button>
                <p>{message}</p>
            </div>
        </Backdrop>
    );
}

export default LoginComponent