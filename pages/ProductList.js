import React from 'react'
import Product from './Product'
import product_data from './product_data'

class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      loading: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        products: product_data.products,
        loading: false
      })
    }, 1500)
  }
  render() {
    if (this.state.loading) return <div className="Product-list"><p className="Loading">Loading...</p></div>
    return (
      <div className="Product-list">
        {this.state.products.map(item =>
          <Product
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            shippingCost={item.shippingCost}
          />
          )}
      </div>
      );
  }
}

export default ProductList;
