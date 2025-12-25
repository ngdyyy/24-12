import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



function Home() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  }

  const handleProduct = (e) => {
    e.preventDefault();
    navigate("/product");
   }
 
   const handleUser = (e) => {
    e.preventDefault();
    navigate("/user");
   }
  return (
    <div 
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "40px",
    }}
    >
      <Stack spacing={2} direction="row">
        <Button onClick={handleLogout} variant="outlined" color="error">Logout</Button>

        <Button onClick={handleProduct} variant="outlined">Products</Button>
      <Button onClick={handleUser} variant="outlined">Users</Button>
      </Stack>
    </div>
  )
}

export default Home;