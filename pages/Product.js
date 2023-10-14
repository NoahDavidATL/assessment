import React from 'react';
import Image from 'next/image';

const Product = ({ image, name, description, price, shippingCost }) => {
  return (
    <div className="Product">
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
      />
      <h4>{name}</h4>
      <p>{description}</p>
      <div>
        <p>{price}</p>
        <p>{shippingCost}</p>
      </div>
    </div>
    );
};

export default Product;
