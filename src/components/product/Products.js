import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

   const handleUser = (e) => {
    e.preventDefault();
    navigate("/user");
   }

   const handleBack = (e) => {
    e.preventDefault();
    navigate("/home");
   }

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response);
        setProducts(response.data);
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
      <Button onClick={handleUser} variant="text">User</Button>
    </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>

        <TableBody>
          {products.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
))}

export default Products;