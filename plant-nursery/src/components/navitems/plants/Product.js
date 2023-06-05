import { Button } from "@mui/material";

import { Link } from "react-router-dom";


const Product = (props) => {
 
  const {  name, author, description, price, image,location } = props.book;
 

  return (
    <div>
        {/* <AdminHeader /> */}
    
    <div className="card">
      <img src={image} alt={name} style={{height : '300px'}} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <p>{location}</p>
      <Button LinkComponent={Link} to={`/track`} sx={{ mt: "auto" }}>
        Track
      </Button>
      <Button LinkComponent={Link} to={`/order`} sx={{ mt: "auto" }}>
        Order
      </Button>
      <Button LinkComponent={Link} to={`/book`} sx={{ mt: "auto" }}>
        Book Slot
      </Button>
      
    </div>
    </div>
  );
};

export default Product;