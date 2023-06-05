import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
 
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/footer";
import AdminHeader from "../header/adminheader";
import './Adminproducts.css'


const Adminproducts = () => {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",

    image: "",
    location: "",
   
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/products", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
        location: String(inputs.location),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/products"));
  };

  return (
    <div style={{width : '100%'}}>
      <AdminHeader />
    
    <form onSubmit={handleSubmit}>
      
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Plant Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Shopkeeper</FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />
        <FormLabel>Description</FormLabel>
        <TextField
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>Price</FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
         <FormLabel>Location</FormLabel>
        <TextField
          value={inputs.location}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="location"
        />
        
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />

        <Button variant="contained" type="submit" style={{marginBottom:'50px'}}>
          Add Plants
        </Button>
      </Box>
    </form>
    <Footer/>
    </div>
    
  );
};

export default Adminproducts;