import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      <h1>Product Details</h1>
      <img style={{ height: '200px' }} src={product.image} alt='' />
      <p>Product ID: {id}</p>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>PRICE: ${product.price}</p>
      <p>Rating: {product?.rating?.rate}</p>
    </div>
  );
};

export default ProductDetails;
