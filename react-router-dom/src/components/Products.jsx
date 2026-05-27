import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error} This is Error message from server</p>;

  return (
    <div>
      <h1>Products List</h1>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              width: '200px',
              border: '1px solid black',
              padding: '10px',
              marginTop: '10px',
            }}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p>{p.price}</p>
            {/* <button onClick={() => navigate(`/products/${p.id}`)}> */}
            <button onClick={() => navigate(`${p.id}`)}>
              Show more ---
            </button>
            {/* <Link to={`/products/${p.id}`}>Show more--</Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
