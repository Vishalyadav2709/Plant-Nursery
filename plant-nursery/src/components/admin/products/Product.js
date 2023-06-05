import { Button } from "@mui/material";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import "./product.css";
const Product = (props) => {
  const history = useHistory();
  const { _id, name, author, description, price, image, location } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/products/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/products"));
  };

  return (
    <div>
        {/* <AdminHeader /> */}
    
    <div className="card">
      <img src={image} alt={name} style={{height :"300px"}} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <p>{location}</p>
      <Button LinkComponent={Link} to={`/adminproducts/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
    </div>
  );
};

export default Product;