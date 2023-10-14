import React from 'react';
import Image from 'next/image';

class Product extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="Product">
        <Image 
          src={this.props.image} 
          alt={this.props.name}
          width={500}
          height={500}
        />
        <h4>{this.props.name}</h4>
        <p>{this.props.description}</p>
        <div>
          <p>{this.props.price}</p>
          <p>{this.props.shippingCost}</p>
        </div>
      </div>
      );
  }
}

export default Product;
