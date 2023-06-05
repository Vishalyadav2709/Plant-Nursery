import React, { useEffect, useState } from "react";
import "./product.css";
import axios from "axios";
import Book from "./Product";

const URL = "http://localhost:5000/products";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Products = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
     
    </div>
  );
};

export default Products;