import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleProduct = (e) => {
   e.preventDefault();
   navigate("/product");
  }

  const handleBack = (e) => {
   e.preventDefault();
   navigate("/home");
  }

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/users");
      console.log(response);
      setUsers(response.data);
    } catch(error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  } 
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    loading ? (<div>Loading...</div>) : (
    <div>
      
      <Stack spacing={2} direction="row">
      <Button onClick={handleBack} variant="text">Back</Button>
      <Button onClick={handleProduct} variant="text">Product</Button>
    </Stack>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user, index) => (
            <TableRow component="th" scope="row"
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.name.firstname} {user.name.lastname}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
)}

export default Users;