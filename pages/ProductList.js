import React, { useState, useEffect } from 'react';
import Product from './Product';
import product_data from './api/product_data';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(product_data.products);
      setLoading(false);
      }, 1500);
    return () => clearTimeout(timer); /* clear the timer to prevent memory leaks */
  }, []);

  if (loading) {
    return <div className="Product-list"><p className="Loading">Loading...</p></div>;
  }

  return (
    <div className="Product-list">
      {products.map(item => (
        <Product
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
          shippingCost={item.shippingCost}
        />
        ))}
    </div>
    );
};

export default ProductList;
