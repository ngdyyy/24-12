import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Login.css'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please enter email and password!");
            return;
        }

        navigate("/home");
    }

  return (
    <div className='login-container'>

        <div className='login-form'>
            <label htmlFor="email">Email</label>
            <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField type='email' id="outlined-basic" label="Email" variant="outlined" required value={email} onChange={(e) => setEmail(e.target.value)} />
    </Box>

            <label htmlFor="password">Password</label>
            <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Password" variant="outlined" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
    </Box>

    <Stack spacing={2} direction="row">
      <Button onClick={handleLogin} variant="outlined">Login</Button>
    </Stack>
        </div>
    </div>
  )
}

export default Login;