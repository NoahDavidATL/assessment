import React, { useState, useEffect } from 'react'

export const Total = (props) => {
  
  /* setup state for total */
  const [total, setTotal] = useState(0);

  /* deconstruct the props */
  const {price, shipping} = props;

  /* add the price and shipping together */
  let newTotal = price + shipping;

  /* update the total */
  useEffect(() => {
    setTotal(newTotal);
    }, [price, shipping])

  /* return price + shipping = total */
  return (
    <div>
      <p>{price}</p>
      <p>+{shipping}</p>
      <hr />
      <p>={total}</p>
    </div>
    )
}