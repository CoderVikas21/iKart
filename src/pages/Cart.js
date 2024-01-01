import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {

  const count = useSelector((state)=>state.cart.value)
  const cart = useSelector((state)=>state.cart.list)
  const amount = parseFloat(useSelector((state=>state.cart.totalamount))).toFixed(2);
  //tofixed for roundoff to 2 decimal place
  const Navigate = useNavigate();

  return (
    <>
      <div className="cart_container">
        {
          cart.length > 0 ? (
            <>
                <div className="cart_left">
                    {
                      cart.map((item)=>{
                        return <CartItem key={item.id} item={item}/>
                      })
                    }
                </div>
                <div className="cart_right">
                  <div className="top">
                    <h4>Your Cart</h4>
                    <h1>Summary</h1>
                    <br />
                    <p>Total Items: {count}</p>
                  </div>
                  <div className="bottom">
                    <p>Total Amount: {amount}</p>
                    <button>CheckOut</button>
                  </div>
                </div> 
            </>
          )
          :
          (
            <div className='empty_cart'>
              <p>Your Cart is Empty</p>
              <button onClick={()=>{Navigate('/')}}>
                Show Now
              </button>
            </div>
          )
        }
        
      </div>
    </>
  )
}

export default Cart
