import React from 'react';
import Image from 'next/image';
import { Total } from './Total'

const Product = (props) => {

  /* deconstruct the props and shorten the length for Total */
  const { image, name, description: desc, price, shippingCost: shipping } = props;

  return (
    <div className="Product">
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
      />
      <h4>{name}</h4>
      <p>{desc}</p>
      <Total {...props} />
    </div>
    );
};

export default Product;
